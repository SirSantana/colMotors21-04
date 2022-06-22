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

    try {
        const user = await userModel.findById(id)
        
    } catch (error) {
        
    }
  }