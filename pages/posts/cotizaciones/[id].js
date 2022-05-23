import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../../components/Layout/Layout";
import DBConnect from "../../../libs/dbConnect";
import postModel from "../../../models/postModel"
import cotizacionModel from "../../../models/cotizacionModel";
import PruebaCotizacion from '../../../components/Posts/Post/PruebaCotizacion'
import CotizacionVista from "../../../components/Posts/Post/CotizacionVista";

export default function Prubea({ Post, Cotizacion }) {
  const router = useRouter();
  const { id } = router.query;
  console.log(router);
  const dispatch = useDispatch()
  const [user, setUser] = useState(null)

  useEffect(() => {
   setUser(JSON.parse(localStorage.getItem('profile')))
  }, []);
  return (
    <>
      <Layout title={"Cotizacion | colMotors"}>
        
        {router.query.cliente ? <CotizacionVista Post={Post} user={user} Cotizacion={Cotizacion}/>: <PruebaCotizacion Post={Post} user={user} Cotizacion={Cotizacion}/>}
      </Layout>
    </>
  );
}
export async function getServerSideProps({ params, query }) {
  const otroId = query?.id?.split(",");

  try {
    await DBConnect();
    const res = await postModel.findById(query.idd);
    const Post = res.toObject();
    Post._id = Post._id.toString();
    Post.creator = Post.creator.toString();
    Post.cotizaciones = Post.cotizaciones.toString();
    Post.date = Post.date.toString();

    const data = await cotizacionModel.findById(otroId);
    const Cotizacion = data.toObject();
    Cotizacion._id = Cotizacion._id.toString();
    // Cotizacion.repuestos = Cotizacion.creator.toString();
    // Cotizacion.precio = Cotizacion.cotizaciones.toString();
    Cotizacion.creator = Cotizacion.creator[0].toString()
    Cotizacion.date = Cotizacion.date.toString();

    return {
      props: { Post, Cotizacion },
    };
  } catch (error) {
    console.log(error);
  }
}
// export async function getServerSideProps({ params, query }) {

//   try {
//     await DBConnect();
    
//     // Cotizacion.date = Cotizacion.date.toString();
//     return {
//       props: { Cotizacion },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
