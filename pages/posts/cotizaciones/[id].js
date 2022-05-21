import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../../../components/Layout/Layout'
import PruebaCotizacion from '../../../components/Posts/Post/PruebaCotizacion'
import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'

export default function Prubea(){
  const router = useRouter()
  const { id } = router.query
  const {cotizacion, cotizaciones} = useSelector(state=> state.cotizaciones)
  
  const otroId = id?.split(",")
  const dispatch = useDispatch()
  
  let cotizacion1 = [];
  if(cotizaciones && otroId?.length >1){
      cotizacion1.push(cotizaciones?.filter((ele) => ele._id === otroId[0].toString()))
      cotizacion1.unshift(cotizaciones?.filter((ele) => ele._id === otroId[1].toString()))
  }
  const cotizacionesVarias = cotizacion1.flat()


  useEffect(()=>{
    if(otroId?.length >1){
      console.log('cotizaciones');
    dispatch(getCotizaciones())
    }else if(otroId?.length <=1){
      console.log('cotizacion');
        dispatch(getCotizacion(otroId[0], router))
    }
},[router, dispatch])

    return(
        <>
        <Layout title={"Cotizacion | colMotors"}>
        <PruebaCotizacion cotizacionesVarias={cotizacionesVarias}/>        
        {/* {cotizacionCreada && id !== undefined ? (
          <div className={classes.cotizarr}>
            <CotizacionVendedor user={user} OnePost={OnePost} el={cotizacionCreada}/>
          </div>
        ) : null} */}
          {/* <Button variant="contained" color='secondary' onClick={()=> router.push("/home")}>Regresa</Button> */}
        {/* {user?.result._id === OnePost.creator && id !== undefined ?
        <div>
            <CotizacionVendedor user={user} OnePost={OnePost} arrayCotizaciones={arrayCotizaciones}/>
        </div>
        :null} */}

        </Layout>
        </>
    )
}
