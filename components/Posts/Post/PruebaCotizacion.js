
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Prueba from './Pruebas'
import {useRouter} from 'next/router'
import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'
import PostCo from './Post'
import CotizacionVista from './CotizacionVista'
export default function PruebaCotizacion({Post, Cotizacion, user, Cotizaciones}){
//   const { cotizacion, cotizaciones } = useSelector((state) => state.cotizaciones);

    const router = useRouter()
    

    
    // const cotizacionesVarias = cotizacion1?.flat()
    
    // console.log(cotizacionesVarias);

    console.log(Cotizaciones);

    return(
        <>
        <PostCo OnePost={Post}/>
         {/* {cotizacionesVarias ? cotizacionesVarias?.map(ele=> <Prueba el={ele}/>): null} */}
        {Cotizaciones.length > 1 
        ? Cotizaciones.map(el=> <CotizacionVista Cotizacion={el} Post={Post} user={user}/>)
        : <CotizacionVista Cotizacion={Cotizacion} Post={Post} user={user} />}
        </>
    )
}