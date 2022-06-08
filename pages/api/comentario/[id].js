import DBConnect from "../../../libs/dbConnect";
import cotizacionModel from "../../../models/cotizacionModel";


DBConnect()

export default async function handler(req, res){
    switch (req.method) {
        case 'POST':
            await createComment(req, res)
    
        default:
            res.status(403).json({success:false, error: 'Ha ocurrido un error'})
    }
}

export const createComment=async (req, res)=>{
    const {id} = req.query
    console.log(req.body.message);
    try {
        const cotizacion = await cotizacionModel.findById(id)
        await cotizacion.comentarios.push(req.body.message)
        await cotizacion.save()

        res.status(200).json({success:true, cotizacion})
    } catch (error) {
        res.status(403).json({success:false, error})
    }
}