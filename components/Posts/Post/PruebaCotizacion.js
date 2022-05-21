
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Prueba from './Pruebas'
import {useRouter} from 'next/router'
import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'
export default function PruebaCotizacion(){
    const router = useRouter()
    const { id } = router.query
    
    const otroId = id?.split(",")
    const {cotizacion, cotizaciones} = useSelector(state=> state.cotizaciones)

    let cotizacion1 = [];
    if(cotizaciones && otroId?.length >1){
        cotizacion1.push(cotizaciones?.filter((ele) => ele._id === otroId[0].toString()))
        cotizacion1.unshift(cotizaciones?.filter((ele) => ele._id === otroId[1].toString()))
    }
    const cotizacionesVarias = cotizacion1.flat()
    
    console.log("cotizaciones", cotizaciones);
    console.log("cotizacion", cotizacion);
    console.log(otroId);

    return(
        <>
         {cotizacionesVarias && cotizacionesVarias.map(el=> <Prueba el={el}/>)}
        {cotizacion && cotizacionesVarias.length === 0 && <Prueba el={cotizacion}/>}

        </>
    )
}