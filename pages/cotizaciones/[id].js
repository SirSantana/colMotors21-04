import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import postModel from "../../models/postModel";
import cotizacionModel from "../../models/cotizacionModel";
import Layout from "../../components/Layout/Layout";
import CotizacionVista from "../../components/Posts/Cotizaciones/CotizacionVista";
import DBConnect from "../../libs/dbConnect";

export default function Prubea({ PostCreator, Cotizaciones }) {
  const [user, setUser] = useState(null);

  const dataUser = {
    userId : user?.result._id,
    userName : user?.result.name
  }

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  return (
    <>
      <Layout title={"Cotizacion | colMotors"}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            maxWidth: "1200px",
            gap: "20px",
            alignContent: "space-around",
            flexWrap: "wrap",
          }}
        >
          {Cotizaciones.map((el) => (
            <CotizacionVista
              Cotizacion={el}
              key={el._id}
              PostCreator={PostCreator}
              dataUser={dataUser}
            />
          ))}
        </div>
      </Layout>
    </>
  );
}
export async function getServerSideProps({ query }) {

  try {
    await DBConnect();
    const res = await postModel.findById(query?.idd);
    const Post = res.toObject();

    const PostCreator = Post.creator.toString();

    const ress = await cotizacionModel.find({ idPost: query?.idd });
    const Cotizaciones = ress.map((el) => {
      const Cotizacione = el.toObject();
      Cotizacione._id = Cotizacione._id.toString();
      Cotizacione.creator = Cotizacione.creator[0].toString();
      Cotizacione.date = Cotizacione.date.toString();

      return Cotizacione;
    });

    return {
      props: { Cotizaciones, PostCreator },
    };
  } catch (error) {
    console.log(error.response);
  }
}
