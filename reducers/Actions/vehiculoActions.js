
import * as api from '../Api/index'
import { EDIT_VEHICULO } from '../type'

export const editVehiculo=(form, id, router, owner)=>async(dispatch)=>{
    try {
        console.log(form);
         const res = await api.editVehiculo(form, id)
         console.log(router);
         console.log(res);

        if(res.status === 200){
            router.reload()
        } 
        dispatch({type:EDIT_VEHICULO})
    } catch (error) {
        console.log(error);
    }
}