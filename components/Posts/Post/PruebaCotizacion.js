
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Prueba from './Pruebas'
import {useRouter} from 'next/router'
import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'
import PostCo from './Post'
export default function PruebaCotizacion({Post, otroId}){
    const router = useRouter()
    const dispatch = useDispatch()
    const {cotizacion, cotizaciones} = useSelector(state=> state.cotizaciones)
    
    console.log("cotizacion",cotizacion);
    console.log("cotizaciones",cotizaciones);

    let cotizacion1 = [];
    if(cotizaciones && otroId?.length >1){
        cotizacion1.push(cotizaciones?.filter((ele) => ele._id === otroId[0].toString()))
        cotizacion1.unshift(cotizaciones?.filter((ele) => ele._id === otroId[1].toString()))
    }
    const cotizacionesVarias = cotizacion1?.flat()
    
    console.log("cotizaciones", cotizaciones);
    console.log("cotizacion", cotizacion);
    console.log(cotizacionesVarias);

    useEffect(()=>{
        dispatch(getCotizaciones())
        if(otroId){
            dispatch(getCotizacion(otroId[0]))
        }
      },[router, dispatch])

    return(
        <>
         {cotizacionesVarias ? cotizacionesVarias.map(el=> <Prueba el={el}/>): null}
        {cotizacion ? cotizacionesVarias.length === 0 && <Prueba el={cotizacion}/>: null}
        <PostCo OnePost={Post}/>
        </>
    )
}