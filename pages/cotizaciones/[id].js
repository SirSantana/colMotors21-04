import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postModel from '../../models/postModel'
import cotizacionModel from '../../models/cotizacionModel'
import Layout from "../../components/Layout/Layout";
import PruebaCotizacion from '../../components/Posts/Cotizaciones/PruebaCotizacion'
import CotizacionVista from "../../components/Posts/Cotizaciones/CotizacionVista";
import DBConnect from "../../libs/dbConnect";

export default function Prubea({ Post, Cotizacion, Cotizaciones }) {
  const router = useRouter();
  const [user, setUser] = useState(null)

  
  useEffect(() => {
   setUser(JSON.parse(localStorage.getItem('profile')))
  },[]);
  return (
    <>
      <Layout title={"Cotizacion | colMotors"}>
      <div style={{display:"flex", flexDirection:'row', maxWidth:'1200px', gap:'20px', alignContent:'space-around', flexWrap:'wrap',}}>
      {Cotizacion?.creator === user?.result._id ? 
      <CotizacionVista Post={Post} user={user} Cotizacion={Cotizacion}  />
         : <PruebaCotizacion Post={Post} user={user} Cotizacion={Cotizacion} Cotizaciones={Cotizaciones}/>
         }
      </div>
      </Layout>
    </>
  );
}
export async function getServerSideProps({ params, query }) {
  const otroId = query?.id?.split(",");
  const idPos = query?.idd
  try {
    await DBConnect();
    const res = await postModel.findById(query?.idd);
    const Post = res.toObject();
    Post._id = Post._id.toString();
    Post.creator = Post.creator.toString();
    Post.cotizaciones = Post.cotizaciones.toString();
    Post.date = Post.date.toString();



      const data = await cotizacionModel.findById(otroId);
      const Cotizacion = data.toObject();
      Cotizacion._id = Cotizacion._id.toString();
      Cotizacion.creator = Cotizacion.creator[0].toString()
      Cotizacion.date = Cotizacion.date.toString();

      const ress = await cotizacionModel.find({idPost:query.idd})
      const Cotizaciones = ress.map((el) => {
        const Cotizacione = el.toObject();
        Cotizacione._id =Cotizacione._id.toString();
        Cotizacione.creator = Cotizacione.creator[0].toString();
        Cotizacione.date = Cotizacione.date.toString();
  
        return Cotizacione;
      });

    return {
      props: { Post, Cotizacion, Cotizaciones },
    };
  } catch (error) {
    console.log(error.response);
  }
}
