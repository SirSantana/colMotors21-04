import DBConnect from "../../../libs/dbConnect";
import userModel from "../../../models/userModel";



DBConnect()
export default async (req,res)=>{
    switch (req.method) {
        case 'GET':
            await getUser(req, res)
            
            break;

    }
}

export const getUser=async(req, res)=>{
    const {id} = req.query
    try {
        const oneUser = await userModel.findById(id)
        res.status(200).json(oneUser)
    } catch (error) {
        res.status(403).json(error)
    }
}