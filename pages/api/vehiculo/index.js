import DBConnect from "../../../libs/dbConnect"
import userModel from "../../../models/userModel"
import vehiculoModel from "../../../models/vehiculoModel"


DBConnect()

export default async(req, res)=>{
    switch (req.method) {
        case 'POST':
            await createVehiculo(req, res)
        
    }
}

export const createVehiculo=async(req, res)=>{
    const {body} = req;
    console.log(body);

    try {
        const newVehiculo = new vehiculoModel(body)
        const user = await userModel.findById(body.owner)
        await user.vehiculos.push(newVehiculo)
        user.save()
        await newVehiculo.save()
        res.status(200).json(newVehiculo)

        
    } catch (error) {
        console.log(error);
    }
}