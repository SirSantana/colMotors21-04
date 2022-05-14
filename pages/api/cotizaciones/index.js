import cotizacionModel from "../../../models/cotizacionModel";
import userModel from "../../../models/userModel";
import postModel from '../../../models/postModel'


// export const getCotizaciones=async(req, res)=>{
//     try {
//         const cotizaciones = await cotizacionModel.find();
//         res.status(200).json(cotizaciones);
//       } catch (error) {
//         res.status(403).json(error);
//       }
// }
export const createCotizacion= async(req, res)=>{
    const body = req.body
    const {query:{id}} =req
    try {
        const cotizacion = await cotizacionModel.create(body)

        const userCreator = await userModel.findById(req.body.idVendedor)
        
        await userCreator.cotizaciones.push(cotizacion)
        userCreator.save()
        
        await cotizacion.creator.push(userCreator)
        cotizacion.save()

        const post = await postModel.findById(id)

        await post.cotizaciones.push(cotizacion)
        post.save()
        res.status(200).json(cotizacion)
    } catch (error) {
        res.status(403).json(error)
    }
}
// export const getCotizacion=async(req, res)=>{
//     const {id} = req.params

//     try {
//         const cotizacion = await cotizacionModel.findById(id)
//         res.status(200).json(cotizacion)
//     } catch (error) {
//         res.status(403).json(error)
        
//     }
// }
// export const deleteCotizacion = async(req, res)=>{
//     const {id} = req.params
//     try {
//         console.log(id);
//         await cotizacionModel.findByIdAndRemove(id)

        // const user = await UserModel.findById(cotizacion.creator[0])
        // console.log(user);
        // await user.cotizaciones.filter(el=> el != id)
        // await UserModel.save()

        // await CotizacionModel.findByIdAndRemove(id)


    //     const cotis = await user.cotizaciones.findById({_id: {$in: id}})
    //     await cotis.remove()

    //     const post = await PostSchema.findOne({_id: req.userId})
    //     console.log("post",post);
    //    const posts =  await post.cotizaciones.findById({_id: {$in: id}})
    //     await posts.remove()

//         res.status(200).json('Elimado correctamente')
//     } catch (error) {
//         res.status(403).json(error)
//     }
// }
