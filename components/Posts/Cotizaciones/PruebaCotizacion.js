import { Button } from '@material-ui/core'
import {useRouter} from 'next/router'
import PostCo from '../Post/Post'
import CotizacionVista from './CotizacionVista'

export default function PruebaCotizacion({Post, user, Cotizacion,  Cotizaciones}){

    const router = useRouter()

    return(
        <>
        <PostCo OnePost={Post} visibleCoti={false}/>
        {Cotizaciones.length > 1 
        ? Cotizaciones.map(el=> <CotizacionVista Cotizacion={el} key={el._id} Post={Post} user={user}/>)
        : <CotizacionVista Cotizacion={Cotizacion} Post={Post} user={user} />}
        </>
    )
}