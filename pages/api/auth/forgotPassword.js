import DBConnect from "../../../libs/dbConnect";
import sendMail, { getTemplate2 } from "../../../libs/mail";
import userModel from "../../../models/userModel";

export default async (req, res) => {
  DBConnect();
  switch (req.method) {
    case "POST":
      await sendMessagePassword(req, res);

    default:
      break;
  }
};

export const sendMessagePassword = async (req, res) => {
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
};
