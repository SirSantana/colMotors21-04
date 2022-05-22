import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Layout from '../../../components/Layout/Layout'
import PruebaCotizacion from '../../../components/Posts/Post/PruebaCotizacion'
import DBConnect from '../../../libs/dbConnect'
import postModel from '../../../models/postModel'

import { getCotizacion, getCotizaciones } from '../../../reducers/Actions/cotizacionesActions'

export default function Prubea({Post}){
  const router = useRouter()
  const { id } = router.query
  
  const otroId = id?.split(",")
    return(
        <>
        <Layout title={"Cotizacion | colMotors"}>
        <PruebaCotizacion Post={Post} otroId={otroId}/>    
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
export async function getServerSideProps({ params, query }) {
  try {
    await DBConnect();
    const res = await postModel.findById(query.idd);
    const Post = res.toObject();
    Post._id = Post._id.toString();
    Post.creator = Post.creator.toString();
    Post.cotizaciones = Post.cotizaciones.toString();
    Post.date = Post.date.toString();
    return {
      props: { Post },
    };
  } catch (error) {
    console.log(error);
  }
}
