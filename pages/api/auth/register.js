import bcrypt from "bcrypt";
import userModel from "../../../models/userModel";
import jwt from "jsonwebtoken";
import valid from "../../../libs/valid";
import DBConnect from "../../../libs/dbConnect";
import { createAccessToken, getToken } from "../../../libs/createToken";
import { getTemplate } from "../../../libs/mail";
import { v4 as uuidv4 } from 'uuid';


DBConnect();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      await register(req, res);
    
    break;
  }
}

async function register(req, res) {
  const { email, password, role, marca, firstName, lastName, confirmPassword, pais } =
    req.body;
  try {
    // const errMsg = valid(email, password, confirmPassword);
    // if (errMsg) return res.status(400).json({ err: errMsg });

    const userExist = await userModel.findOne({ email });

    if (userExist) return res.status(403).json("Datos invalidos o Email ya registrado");
    if (password !== confirmPassword) return res.status(403).json("Datos invalidos");

    const pass = await bcrypt.hash(password, 10);

    const code = uuidv4()
    const result = await userModel.create({
      email,
      password: pass,
      name: `${firstName} ${lastName}`,
      marca,
      role,
      pais,
      code
    });
    if (!role) result.role.push("Cliente");

    const token = createAccessToken({result,code})

    const template = getTemplate(result.name, token)

    let mailOptions = {
      from: "salazarmiguelito23@gmail.com",
      to: result.email,
      subject:'Quarks',
      text: 'Acepta para ser miembro de colMotors',
      htmL:null
    };

    await sendMail(mailOptions, template)


    await result.save();

  res.status(200).json({result, token})


    localStorage.setItem("profile", JSON.stringify({ ...result, token }));
  } catch (error) {
    console.log(error);
  }
}

async function sendMail(mailOptions, template) {

  mailOptions.html = template

  console.log('template',template);

  let transporter = nodemailer.createTransport({
      tls: {
          rejectUnauthorized: false
      },
      secure: false, // true for 465, false for other ports
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user:process.env.NEXT_PUBLIC_MAIL_USERNAME,
        pass:process.env.NEXT_PUBLIC_MAIL_PASSWORD,
        clientId:process.env.NEXT_PUBLIC_OAUTH_CLIENTID,
        clientSecret:process.env.NEXT_PUBLIC_OAUTH_CLIENT_SECRET,
        refreshToken:process.env.NEXT_PUBLIC_OAUTH_REFRESH_TOKEN
      }
    });
    await new Promise((resolve, reject) => {
      // verify connection configuration
      transporter.verify(function (error, success) {
          if (error) {
              console.log(error);
              reject(error);
          } else {
              console.log("Server is ready to take our messages");
              resolve(success);
          }
      });
  });

  
  await new Promise((resolve, reject) => {
      console.log('reject', reject);
      // send mail
      transporter.sendMail(mailOptions, (err, info) => {
          if (err) {
              console.error(err);
              reject(err);
          } else {
              console.log(info);
              resolve(info);
          }
      });
  });
  

}
