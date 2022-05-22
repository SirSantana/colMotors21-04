
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Prueba from './Pruebas'
import {useRouter} from 'next/router'
import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'
import PostCo from './Post'
export default function PruebaCotizacion({Post, otroId, cotizacion1}){
  const { cotizacion, cotizaciones } = useSelector((state) => state.cotizaciones);

    const router = useRouter()
    

    
    const cotizacionesVarias = cotizacion1?.flat()
    
    console.log(cotizacionesVarias);

  

    return(
        <>
         {cotizacionesVarias ? cotizacionesVarias?.map(ele=> <Prueba el={ele}/>): null}
        {cotizacion ? cotizacionesVarias?.length === 0 && <Prueba el={cotizacion}/>: null}
        <PostCo OnePost={Post}/>
        </>
    )
}