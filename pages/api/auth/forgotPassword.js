import DBConnect from "../../../libs/dbConnect";
import  { getTemplate2 } from "../../../libs/mail";
import nodemailer from 'nodemailer'

import userModel from "../../../models/userModel";
DBConnect();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await sendMessagePassword(req, res);
  }
};

async function sendMessagePassword (req, res) {
    const {email} = req.body
  try {

    const template = getTemplate2();

    let mailOptions = {
      from: "salazarmiguelito23@gmail.com",
      to: email,
      subject: "colMotors",
      text: "Restaurar contraseña",
      htmL: null,
    };
    await sendMail(mailOptions, template);
    res.status(200).json({result: email})
  } catch (error) {
      console.log(error);
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
};
