import DBConnect from "../../../libs/dbConnect"
import gasolinaModel from "../../../models/gasolinaModel"
import vehiculoModel from '../../../models/vehiculoModel'

DBConnect()
export default async (req, res)=>{
    switch (req.method) {
        case 'POST':
            await createGasolina(req, res)
        case 'PATCH':
            await editGasolina(req, res)
    }
}


export const createGasolina= async(req, res)=>{
    const {body, query} = req;
    try {
        const gasolina = new gasolinaModel(body)
        const vehiculo = await vehiculoModel.findById(query.id)
        await vehiculo.gasolina.push(gasolina)
        await vehiculo.save()
        await gasolina.save()
        res.status(200).json({success:true,gasolina})
    } catch (error) {
        res.status(403).json(error)
    }
}

export const editGasolina=async(req, res)=>{
    const{body, query:{id}}=req
    try {
        console.log(body);
        
        const gasolina = await gasolinaModel.findById(id)
        let claves = Object.keys(body);
    
    for (let i = 0; i < claves.length; i++) {
      let clave = claves[i];
      if (body[clave] !== "" && body[clave] !== null) {
        gasolina[clave] = body[clave];
      }
    }
        // await gasolina.update({$set:body})
        
        await gasolina.save()       
        res.status(200).json({success: true, gasolina})

    } catch (error) {
        console.log(error);
    }
}