import DBConnect from "../../../libs/dbConnect";
import postModel from '../../../models/postModel'


DBConnect()


export default async function handler(req, res){
    switch (req.method) {
        case 'DELETE':
            await deletePost(req, res)
        case 'GET':
            await getPost(req, res)
        default:
            break;
    }
}
export const getPost = async (req, res) => {
    const { id } = req.query;
    try {
      const post = await postModel.findById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(403).json(error);
    }
  };
export const deletePost = async(req, res)=>{
    const {query:{id}} = req;
    try {
        await postModel.findByIdAndDelete(id)
        res.status(200).json({success: true, data:'Eliminado Correctamente'})
        
    } catch (error) {
        res.status(200).json({success: false, error})
        
    }
}