import userModel from "../../../models/userModel";
import DBConnect from "../../../libs/dbConnect";



DBConnect()
export default async (req,res)=>{
    switch (req.method) {
        case 'GET':
            await getUsers(req, res)
            
            break;

    }
}

export  const getUsers= async(req, res)=>{
    try {
        const oldUsers = await userModel.find().populate('cotizaciones')
        res.status(200).json(oldUsers)
    } catch (error) {
        res.status(403).json(error)
    }
}