import DBConnect from "../../../libs/dbConnect";
import postModel from '../../../models/postModel'
import userModel from '../../../models/userModel'

DBConnect()


export default async function handler(req, res){
    switch (req.method) {
        case 'DELETE':
            await deletePost(req, res)
        case 'GET':
            await getPost(req, res)
        // case 'POST':
        //     await createCotizacion(req, res)
        
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
            const post = await postModel.findByIdAndDelete(id);
            console.log('post', post);

            const user = await userModel.findById(post.creator);
            console.log('user', user);

            const index = user.posts.indexOf(id);
            user.posts.splice(index, 1);
           
            await user.save();
        

        res.status(200).json({success: true, data:'Eliminado Correctamente'})
        
    } catch (error) {
        res.status(200).json(error)
        
    }
}

// export const createCotizacion = async(req, res)=>{
//     const {query:{id}} = req;
//     const {body} = req;
//     try {
//        const post = await postModel.findById(id)
//         await post.cotizaciones.push(body)
//         const user = await userModel.findById(body.idVendedor)
//         await user.cotizaciones.push(post._id)
//         await user.save()

//         await post.save()
//         await localStorage.setItem("profile", JSON.stringify(user))
//         res.status(200).json({success: true, post, user})
        
//     } catch (error) {
//         res.status(200).json({success: false, error})
        
//     }
// }