import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import PostCo from "../../components/Posts/Post/Post";
import DBConnect from "../../libs/dbConnect";
import postModel from "../../models/postModel";
export default function PostPage() {
 
  const router = useRouter();
  const [message, setMessage] = useState('')
  // const user = JSON.parse(localStorage.getItem('profile'))

  
  return (
    <Layout title={'Post | colMotors'}>
      <PostCo />
    </Layout>
  );
}
// export async function getServerSideProps({ params }) {
//   try {
//     await DBConnect();
//     const res = await postModel.findById(params.id);
//     const Post = res.toObject();
//     Post._id = Post._id.toString();
//     Post.creator = Post.creator.toString();
//     Post.cotizaciones = Post.cotizaciones.toString();
//     Post.date = Post.date.toString();
//     return {
//       props: { Post },
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }

