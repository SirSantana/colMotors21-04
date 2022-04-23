import DBConnect from "../../../libs/dbConnect";
import postModel from '../../../models/postModel'

DBConnect()

export default async function handler(req, res){
    switch (req.method) {
        case 'DELETE':
            await deletePost(req, res)
            break;
    
        default:
            break;
    }
}

export const deletePost = async(req, res)=>{
    const {query:{id}} = req;
    try {
        await postModel.findByIdAndDelete(id)
        res.status(200).json({success: true, data:'Eliminado Correctamente'})
        
    } catch (error) {
        res.status(200).json({success: false, error})
        
    }
}