import cotizacionModel from "../../../models/cotizacionModel";
import userModel from "../../../models/userModel";
import postModel from '../../../models/postModel'

export default async  (req, res)=>{
    switch (req.method) {
        case 'POST':
            await createCotizacion(req, res)
        case 'GET':
            await getCotizacion(req, res)
            break;
    
        default:
            break;
    }
}


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

    try {
        const cotizacion = await cotizacionModel.create(body)

        const userCreator = await userModel.findById(req.body.idVendedor)
        
        await userCreator.cotizaciones.push(cotizacion)
        userCreator.save()
        
        const post = await postModel.findById(body.idPost)

        await post.cotizaciones.push(cotizacion)
        post.save()

        await cotizacion.creator.push(userCreator)
        cotizacion.save()

        
        
        res.status(200).json( cotizacion)
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
