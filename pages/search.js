import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import DBConnect from "../libs/dbConnect";
import postModel from "../models/postModel";
import PostCard from "../utils/PostCard/postCard";

export default function Search({ products }) {
  const [user, setUser] = useState(null);
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
          <Grid key={Post._id} item xs={12} sm={12} lg={4} md={6}>
            <PostCard Post={Post} User={user} />
          </Grid>
        ))}
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
