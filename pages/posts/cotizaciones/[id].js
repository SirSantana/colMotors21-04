import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../../../components/Layout/Layout'
import PruebaCotizacion from '../../../components/Posts/Post/PruebaCotizacion'
import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'

export default function Prubea(){
  const router = useRouter()
  const { id } = router.query
  
  const otroId = id?.split(",")
  const dispatch = useDispatch()
  console.log(otroId);



  useEffect(()=>{
    dispatch(getCotizaciones())
    if(otroId){
    dispatch(getCotizacion(otroId[0], router))
    }
  },[router, dispatch])

    return(
        <>
        <Layout title={"Cotizacion | colMotors"}>
        <PruebaCotizacion />     
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
