
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Prueba from './Pruebas'
import {useRouter} from 'next/router'
import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'
export default function PruebaCotizacion({otroId}){
    
    const {cotizacion, cotizaciones} = useSelector(state=> state.cotizaciones)

    let cotizacion1 = [];
    if(cotizaciones && otroId?.length >1){
        cotizacion1.push(cotizaciones?.filter((ele) => ele._id === otroId[0].toString()))
        cotizacion1.unshift(cotizaciones?.filter((ele) => ele._id === otroId[1].toString()))
    }
    const cotizacionesVarias = cotizacion1.flat()
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