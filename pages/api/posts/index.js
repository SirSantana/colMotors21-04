


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

    console.log(req.userId);
    try {
        const {body, userId} = req;

    const newPost = new postModel(body)
    const creator = await userModel.findById(userId)

    await newPost.creator.push(creator)
    await newPost.save()

    await newPost.nombreCreador.push(creator?.name);
    await newPost.save();

    await creator.posts.push(newPost);
    await creator.save();

    res.status(200).json(newPost);
        
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