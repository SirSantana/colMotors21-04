import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import PostCo from "../../components/Posts/Post/Post";
import DBConnect from "../../libs/dbConnect";
import postModel from "../../models/postModel";



export default function PostPage({Post}) {
  const dispatch = useDispatch()
  const router = useRouter();
  const [message, setMessage] = useState('')


  // const createCotizacion=async(postData, id)=>{
  //   try {
  //     const res = await fetch(`/api/posts/${id}`,{
  //       method:'POST',
  //       headers: {"Content-type": "application/json"},
  //       body: JSON.stringify(postData),
  //     })
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  

  return (
    <Layout title={'Post | colMotors'}>
      <PostCo OnePost={Post}/>
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  try {
    await DBConnect();
    const res = await postModel.findById(params.id);
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

