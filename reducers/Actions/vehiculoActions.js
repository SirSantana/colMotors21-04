
import * as api from '../Api/index'
import { CREATE_VEHICULO } from '../type'

export const createVehiculo=(form)=>async(dispatch)=>{
    try {
        const res = await api.createVehiculo(form)
        console.log(res);
        // dispatch({type:CREATE_VEHICULO, payload:data})
    } catch (error) {
        console.log(error);
    }
}