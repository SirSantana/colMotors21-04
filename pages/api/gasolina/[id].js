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
        const gasolina = new gasolinaModel(body)
        console.log(gasolina);
        const vehiculo = await vehiculoModel.findById(query.id)
        await vehiculo.gasolina.push(gasolina)
        await vehiculo.save()
        await gasolina.save()
        res.status(200).json({success:true,gasolina})
    } catch (error) {
        res.status(403).json(error)
    }
}