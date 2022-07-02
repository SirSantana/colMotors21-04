import DBConnect from "../../../libs/dbConnect";
import cotizacionModel from "../../../models/cotizacionModel";


DBConnect()

export default async function handler(req, res){
    switch (req.method) {
        case 'POST':
            await createComment(req, res)

    }
}

export const createComment=async (req, res)=>{
    const {id} = req.query
    try {
        const cotizacion = await cotizacionModel.findById(id)
         cotizacion.comentarios.push(req.body.message)

        const upCotizacion = await cotizacionModel.findByIdAndUpdate(id, cotizacion,{new:true})

        res.status(200).json({success:true, upCotizacion})
    } catch (error) {
        res.status(403).json({success:false, error})
    }
}