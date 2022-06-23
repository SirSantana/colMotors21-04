import DBConnect from "../../../../libs/dbConnect";
import userModel from "../../../../models/userModel";


DBConnect();

export default async function handler(req, res) {
    const { method } = req;
    switch (method) {
      case "PATCH":
        await calificacion(req, res)
    }
  }

  async function calificacion(req, res){
    const {id} = req.query
    const {calificacion} = req.body
    try {
        const user = await userModel.findById(id)
        user.calificacion.push(calificacion)
        await user.save()
        console.log(user);
        res.status(200).json(user)
    } catch (error) {
        res.status(403).json(error)
    }
  }