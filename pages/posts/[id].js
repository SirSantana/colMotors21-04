import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
import PostCo from "../../components/Posts/Post/Post";
import DBConnect from "../../libs/dbConnect";
import postModel from "../../models/postModel";
export default function PostPage({Post}) {
 
  const router = useRouter();
  const [message, setMessage] = useState('')
  const [deletee, setDelete] = useState(false)
  const { id } = router.query;
  // const user = JSON.parse(localStorage.getItem('profile'))

  
  const handleDelete=()=>{
    deletePost(id)
  }

  useEffect(()=>{
    if(deletee === true){
     handleDelete()
    }
  },[])

  async function deletePost(ID){
    try {
      const res = await fetch(`/api/posts/${ID}`,{
        method:'DELETE',
        headers:{'Content-type': 'application/json'},
        // body: JSON.stringify(id)
      })
       if(res){
        router.push("/home")
        setMessage('Eliminado correctamente')
       }
        
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Layout title={'Post | colMotors'}>
      <PostCo Post={Post}  setDelete={setDelete}/>
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
  } catch (error) {}
}

