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
        const gasolina =await gasolinaModel.create(body)
        const vehiculo = await vehiculoModel.findById(body.vehiculo)
        await vehiculo.gasolina.push(gasolina)
        vehiculo.save()
        gasolina.save()
        res.status(200).json({gasolina})
    } catch (error) {
        res.status(403).json(error)
    }
}