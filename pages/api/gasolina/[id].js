import DBConnect from "../../../libs/dbConnect"
import gasolinaModel from "../../../models/gasolinaModel"
import vehiculoModel from '../../../models/vehiculoModel'

DBConnect()
export default async (req, res)=>{
    switch (req.method) {
        case 'POST':
            await createGasolina(req, res)
    
    }
}


export const createGasolina= async(req, res)=>{
    const {body, query} = req;
    try {
        const res = new gasolinaModel(body)
        const vehiculo = await vehiculoModel.findById(body.vehiculo)
        await vehiculo.gasolina.push(res)
        await vehiculo.save()
        await res.save()
        res.status(200).json({success: true, res})
    } catch (error) {
        
    }
}