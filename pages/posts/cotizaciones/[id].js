import { useRouter } from 'next/router'

import Layout from '../../../components/Layout/Layout'
import PruebaCotizacion from '../../../components/Posts/Post/PruebaCotizacion'

export default function Prubea(){
    
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
