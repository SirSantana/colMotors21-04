import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout/Layout";
import PostCo from "../../components/Posts/Post/Post";
import DBConnect from "../../libs/dbConnect";
import postModel from "../../models/postModel";
import { getPost } from "../../reducers/Actions/postActions";
export default function PostPage() {
  const dispatch = useDispatch()
  const router = useRouter();
  const [message, setMessage] = useState('')
  // const user = JSON.parse(localStorage.getItem('profile'))
  const {post} = useSelector(state=> state.posts)


  useEffect(()=>{
    dispatch(getPost(id))
  },[dispatch])

  return (
    <Layout title={'Post | colMotors'}>
      <PostCo OnePost={post}/>
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

