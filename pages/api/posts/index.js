


import DBConnect from "../../../libs/dbConnect";
import postModel from '../../../models/postModel'

DBConnect()

export default async function handler(req, res){
    switch (req.method) {
        case 'POST':
            await createPost(req, res)
            break;
    
        default:
            res.status(403).json({success:false, error: 'Ha ocurrido un error'})
    }
}

export const createPost=async(req, res)=>{
    try {
        const post = new postModel(req.body)
        await post.save()
        res.status(200).json({success: true, post})
        
    } catch (error) {
        res.status(200).json({success: false, error})
        
    }
}
export const config = {
    api: {
      bodyParser: {
        sizeLimit: '4mb',
      },
    },
  }