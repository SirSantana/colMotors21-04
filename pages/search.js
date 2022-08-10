import { Button, Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import DBConnect from "../libs/dbConnect";
import postModel from "../models/postModel";
import PostCard from "../utils/PostCard/postCard";
import { useRouter } from "next/router";
export default function Search({ products }) {
  const [user, setUser] = useState(null);
  const router = useRouter()
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, []);
  return (
    <Layout title={'Repuesto'}>
      <Grid
        style={{
          display: "flex",
          maxWidth: "1000px",
          height: "fit-content",
          padding: "0",
        }}
        container
        alignItems="stretch"
        spacing={3}
      >
        {products?.map((Post) => (
          <Grid style={{width:'100vw'}} key={Post._id} item xs={12} sm={8} lg={4} md={6}>
            <PostCard Post={Post} User={user} />
          </Grid>
        ))}
        {products.length<1 && 
        <div style={{marginTop:'20px', width:'100%',display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
        <h3 style={{margin:0}}>No se encontraron cotizaciones </h3>
        <h4 style={{margin:0, fontWeight:'400'}}>Puedes cotizar manualmente tus repuestos, da click en el boton de abajo </h4>

        <Button
        onClick={() => router.push("/form")}
        variant="contained"
        color="secondary"
      >
        Cotiza Manualmente
      </Button>
      </div>}
      </Grid>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  await DBConnect();
  const search = query.query;

  const queryFilter =
    search
      ? {
          repuesto: {
            $regex: search,
            $options: "i",
          },
        }
      : {};
  
  const productDocs = await postModel.find({...queryFilter });

  const products = productDocs.map((el) => {
    const Post = el.toObject();

    Post._id = Post._id.toString();
    Post.creator = Post.creator.toString();
    Post.cotizaciones = Post.cotizaciones.toString();
    Post.date = Post.date.toString();

    return Post;
  });
  console.log(products);

  return {
    props: {
      products,
    },
  };
}
