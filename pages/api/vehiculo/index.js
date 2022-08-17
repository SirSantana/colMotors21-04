import DBConnect from "../../../libs/dbConnect"
import userModel from "../../../models/userModel"
import vehiculoModel from "../../../models/vehiculoModel"


DBConnect()

export default async(req, res)=>{
    switch (req.method) {
        case 'UPDATE':
            await updateVehiculo(req, res)
        case 'POST':
            await createVehiculo(req, res)
    }
}

export const createVehiculo=async(req, res)=>{
    try {
        const vehicule = new vehiculoModel(req.body)
        let user = await userModel.findById(req.body.owner)
        await user.vehiculos.push(vehicule)
        console.log("vehicule",vehicule);
        console.log("user",user);

        await vehicule.save()
        await user.save()
        res.status(200).json({success:true,vehicule})
    } catch (error) {
        res.status(403).json(error)
        
    }
}


export const updateVehiculo=async(req, res)=>{
    const {body} = req;
    console.log(body);

    try {
        // const newVehiculo = new vehiculoModel(body)
        // const user = await userModel.findById(body.owner)
        // await user.vehiculos.push(newVehiculo)
        // user.save()
        // await newVehiculo.save()
        // res.status(200).json(newVehiculo)

        
    } catch (error) {
        console.log(error);
    }
}