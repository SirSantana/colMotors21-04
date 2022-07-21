
import * as api from '../Api/index'
import { EDIT_VEHICULO } from '../type'

export const editVehiculo=(form, id, router, owner)=>async(dispatch)=>{
    try {
         const res = await api.editVehiculo(form, id)

        if(res.status === 200){
            router.reload()
        } 
        dispatch({type:EDIT_VEHICULO})
    } catch (error) {
        console.log(error);
    }
}