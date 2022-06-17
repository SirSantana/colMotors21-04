

import jwt from "jsonwebtoken";

import DBConnect from "../../../libs/dbConnect";
import postModel from '../../../models/postModel'
import userModel from '../../../models/userModel'
const secret = 'test';

DBConnect()

export default async function handler(req, res){
    switch (req.method) {
        case 'GET':
            await getPosts(req,res)
        case 'POST':
            await createPost(req, res)
    
        default:
            res.status(403).json({success:false, error: 'Ha ocurrido un error'})
    }
}
export const getPosts = async (req, res) => {
      try {
        const posts = await postModel.find({}).limit(4)
        const data = posts
        res.status(200).json({data});
      } catch (error) {
        res.status(403).json(error);
      }
    };
export const createPost=async(req, res)=>{
    const {body} = req;
    try {
        const newPost = new postModel(body)
        const user = await userModel.findById(body.creator)
        await user.posts.push(newPost)
        user.save()
        const userUp = await userModel.findByIdAndUpdate(body.creator, {numeroCotizaciones: user.numeroCotizaciones + 1}, {new:true})
        userUp.save()
        await newPost.save()
        res.status(200).json({success: true, newPost})
        
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
