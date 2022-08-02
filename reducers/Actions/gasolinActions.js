import * as api from '../Api/index'
import { ADD_GASOLINA } from '../type';

export const addGasolina=(form, id, router, setMessage)=>async(dispatch)=>{
    try {
        const res = await api.addGasolina(form, id)
        setMessage({description:'Datos Agregados!'})
        if(res.status === 200) router.reload()
        dispatch({type:ADD_GASOLINA, payload:res})
    } catch (error) {
        setMessage({description:'Error, revise su conexion', error:true})

        console.log(error.message);
    }
}
export const editGasolina=(form, idPost, router, setMessage)=>async(dispatch)=>{
    try {
        console.log(form, idPost);
        const res = await api.editGasolina(form, idPost)
        setMessage({description:'Datos Actualizados!'})
        if(res.status === 200) router.reload()
        dispatch({type:ADD_GASOLINA, payload:res})
    } catch (error) {
        setMessage({description:'Error, revise su conexion', error:true})
        console.log(error.message);
    }
}
export const getGasolina=(id)=>async(dispatch)=>{
    try {
        const res = await api.getGasolina(id)
    } catch (error) {
        
    }
}