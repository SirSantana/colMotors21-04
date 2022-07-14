import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import postModel from "../../models/postModel";
import DBConnect from "../../libs/dbConnect";
import HomeVendedor from "../../components/Home/HomeVendedor";
import userModel from "../../models/userModel";

export default function Home({ Postss }) {
  
  return (
    <>
      <Layout title={"Home | colMotors"}>
        <HomeVendedor posts={Postss} />
      </Layout>
    </>
  );
}
export async function getServerSideProps({query}) {
  
  const {id} = query
    try {
    await DBConnect();
    const user = await userModel.findById(id)
    const marcas = user.marcasComercializadas
    const res = await postModel
      .find({ marca: { $in:marcas } })
      .sort([["date", -1]]);

    const Postss = res.map((el) => {
      const Post = el.toObject();

      Post._id = Post._id.toString();
      Post.creator = Post.creator.toString();
      Post.cotizaciones = Post.cotizaciones.toString();
      Post.date = Post.date.toString();

      return Post;
    });
    return {
      props: { Postss },
    };
  } catch (error) {
    console.log(error);
  }
}

// export async function getServerSideProps({ params }) {
//   try {
//     await DBConnect();
//     const res = await postModel
//       .find({ creator: params.id })
//       .sort([["date", -1]])
//       .limit(3);
//     const Postss = res.map((el) => {
//       const Post = el.toObject();

//       Post._id = Post._id.toString();
//       Post.creator = Post.creator.toString();
//       Post.cotizaciones = Post.cotizaciones.toString();
//       Post.date = Post.date.toString();

//       return Post;
//     });
//     return {
//       props: { Postss },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
