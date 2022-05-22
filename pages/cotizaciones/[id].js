import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "../../components/Layout/Layout";
import PruebaCotizacion from "../../components/Posts/Post/PruebaCotizacion";
import DBConnect from "../../libs/dbConnect";
import postModel from "../../models/postModel";
import cotizacionModel from "../../models/cotizacionModel";

import {
  getCotizacion,
  getCotizaciones,
} from "../../reducers/Actions/cotizacionesActions";

export default function Prubea({ Post, Cotizacion }) {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch()

  // let cotizacion1 = [];
  const { cotizacion, cotizaciones } = useSelector((state) => state.cotizaciones);

  // if (cotizaciones && otroId?.length > 1) {
  //   cotizacion1.push(
  //     cotizaciones?.filter((ele) => ele._id === otroId[0].toString())
  //   );
  //   cotizacion1.unshift(
  //     cotizaciones?.filter((ele) => ele._id === otroId[1].toString())
  //   );
  // }
  
  // console.log("cotizaciones", cotizaciones);
  // console.log("cotizacion", cotizacion);
  // useEffect(() => {
  //   dispatch(getCotizaciones());
  //   if(otroId){
  //       dispatch(getCotizacion(otroId[0]))
  //   }
  // }, []);
  return (
    <>
      <Layout title={"Cotizacion | colMotors"}>
        <PruebaCotizacion Post={Post} Cotizacion={Cotizacion}/>
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
