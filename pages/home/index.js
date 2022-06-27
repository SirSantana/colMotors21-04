import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HomeComponent from "../../components/Home/Home";
import { useDispatch, useSelector } from "react-redux";
import postModel from '../../models/postModel'
import DBConnect from "../../libs/dbConnect";


export default function Home({Postss}) {
    const dispatch = useDispatch()
  const router = useRouter();

  const createPosts = async (postData) => {
    try {
      await fetch("/api/posts/", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(postData),
      }).then((response)=> response.json())
        .then((data)=> router.push(`/posts/${data?.newPost?._id}`))
        .catch(err=> console.log(err))
      
    } catch (error) {
      console.log(error);
    }
  };
  
  
  return (
    <>
      <Layout title={"Home | colMotors"}>
        <HomeComponent createPosts={createPosts} posts={Postss}/>
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  try {
    await DBConnect();
    const res = await postModel.find().sort([['date', -1]]).limit(3);
    const Postss = res.map((el) => {
      const Post = el.toObject();

      Post._id = Post._id.toString();
      Post.creator = Post.creator.toString();
      Post.cotizaciones = Post.cotizaciones.toString();
      Post.date = Post.date.toString();

      return Post;
    });
    return {
      props: { Postss,
        
      }
    };
  } catch (error) {
    console.log(error);
  }
}
