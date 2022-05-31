
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Prueba from './Pruebas'
import {useRouter} from 'next/router'
import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'
import PostCo from './Post'
export default function PruebaCotizacion({Post, Cotizacion, user}){
//   const { cotizacion, cotizaciones } = useSelector((state) => state.cotizaciones);

    const router = useRouter()
    

    
    // const cotizacionesVarias = cotizacion1?.flat()
    
    // console.log(cotizacionesVarias);

    console.log(Cotizacion);

    return(
        <>
        <PostCo OnePost={Post}/>
         {/* {cotizacionesVarias ? cotizacionesVarias?.map(ele=> <Prueba el={ele}/>): null} */}
        {Cotizacion ? <Prueba el={Cotizacion} />: null}
        </>
    )
}