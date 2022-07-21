import * as api from '../Api/index'
import { ADD_GASOLINA } from '../type';

export const addGasolina=(form, id, router, setVisibleModal)=>async(dispatch)=>{
    try {
        const res = await api.addGasolina(form, id).then(res=> router.reload() && setVisibleModal(false))
        dispatch({type:ADD_GASOLINA, payload:res})
    } catch (error) {
        console.log(error.message);
    }
}
export const getGasolina=(id)=>async(dispatch)=>{
    try {
        const res = await api.getGasolina(id)
    } catch (error) {
        
    }
}