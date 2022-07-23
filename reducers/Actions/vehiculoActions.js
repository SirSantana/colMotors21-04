
import * as api from '../Api/index'
import { EDIT_VEHICULO } from '../type'

export const editVehiculo=(form, id, router, setTexto)=>async(dispatch)=>{
    try {
         const {data} = await api.editVehiculo(form, id)
         setTexto({description:'Guardado'})
        router.reload()
        dispatch({type:EDIT_VEHICULO, payload:data})
    } catch (error) {
        setTexto({error:true, description:'Ha ocurrido un error, elige una imagen menor a 1 mb'})
        console.log(error);
    }
}