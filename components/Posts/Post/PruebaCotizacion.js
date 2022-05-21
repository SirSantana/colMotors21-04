
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Prueba from './Pruebas'
import {useRouter} from 'next/router'
import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'
export default function PruebaCotizacion({cotizacionesVarias, cotizacion, cotizaciones}){
    
    console.log('cotizacion1', cotizacionesVarias);
    console.log('renderizadoFuera');
 
    console.log("cotizacion",cotizacion);
    return(
        <>
         {cotizacionesVarias && cotizacionesVarias.map(el=> <Prueba el={el}/>)}
        {cotizacion && cotizacionesVarias.length === 0 && <Prueba el={cotizacion}/>}

        </>
    )
}