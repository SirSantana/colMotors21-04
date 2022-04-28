import bcrypt from "bcrypt";
import userModel from "../../../models/userModel";
import jwt from "jsonwebtoken";
import valid from "../../../libs/valid";
import DBConnect from "../../../libs/dbConnect";



DBConnect();

export default async function handler(req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  const { method } = req;

  switch (method) {
    case "POST":
      await register(req, res);

    default:
      res.status(404).json({ success: false, error: error });
  }
}

async function register(req, res) {
  const { email, password, role, marca, firstName, lastName, confirmPassword } =
    req.body;
  try {
    const errMsg = valid(email, password, confirmPassword);
    if (errMsg) return res.status(400).json({ err: errMsg });

    const userExist = await userModel.findOne({ email });

    if (userExist) return res.status(403).json("El usuario ya existe");

    const pass = await bcrypt.hash(password, 10);
    const result = await userModel.create({
      email,
      password: pass,
      name: `${firstName} ${lastName}`,
      marca,
      role,
    });
    if (!role) result.role.push("Cliente");
    await result.save();

    const token = jwt.sign({
      id: result._id
  }, 'test', {expiresIn: '1h'})

  res.status(200).json({result, token})


    localStorage.setItem("profile", JSON.stringify({ ...result, token }));
  } catch (error) {
    res.status(404).json({ success: false, error: error });
  }
}
