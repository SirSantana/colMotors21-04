import DBConnect from "../../../../libs/dbConnect";
import cotizacionModel from "../../../../models/cotizacionModel";
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
    const {form, cotizacionId} = req.body
    try {
        const user = await userModel.findById(id)
        user.calificacion.push(form.calificacion)
        await user.save()
        const cotizacion = await cotizacionModel.findById(cotizacionId)
        cotizacion.calificado = true
        await cotizacion.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(403).json(error)
    }
  }