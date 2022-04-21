import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FormPost from "../../components/FormPost";
import Layout from "../../components/Layout/Layout";
import Posts from "../../components/Posts/Posts";
import DBConnect from "../../libs/dbConnect";
import postModel from "../../models/postModel";
import Contador from "../../utils/contador";


export default function Prueba({ Postss }) {
  

  return (
    <>
      <Layout>
        <Posts Posts={Postss}/>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  try {
    await DBConnect();
    const res = await postModel.find({});
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
