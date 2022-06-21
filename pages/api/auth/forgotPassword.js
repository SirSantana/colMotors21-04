import DBConnect from "../../../libs/dbConnect";
import sendMail, { getTemplate2 } from "../../../libs/mail";
import userModel from "../../../models/userModel";
DBConnect();

export default async (req, res) => {
  switch (req.method) {
    case "POST":
      await sendMessagePassword(req, res);
      break;
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
    console.log('mail', mailOptions);
    await sendMail(mailOptions, template);
    res.status(200).json({result: email})
  } catch (error) {
      console.log(error);
  }
};
