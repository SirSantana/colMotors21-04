import cotizacionModel from "../../../models/cotizacionModel";


export default async (req, res)=>{
    switch (req.method) {
        case 'GET':
                await getCotizacion(req, res)
            break;
    
        default:
            break;
    }
}

export const getCotizacion=async(req, res)=>{
    const {query: {id}} = req
    try {
        const cotizacion = await cotizacionModel.findById(id)
        res.status(200).json(cotizacion)
    } catch (error) {
        res.status(403).json(error)
        
    }
}