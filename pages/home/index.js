import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import decode from "jwt-decode";
import { useRouter } from "next/router";
import HomeComponent from "../../components/Home/Home";
import DBConnect from "../../libs/dbConnect";
import { getPosts } from "../../reducers/Actions/postActions";
import { useDispatch, useSelector } from "react-redux";
import axios, { Axios } from "axios";



export default function Home({posts}) {
    const [user, setUser] = useState();
    const dispatch = useDispatch()
  const router = useRouter();
  const [token, setToken] = useState(null)
  console.log(posts);
  const createPosts = async (postData) => {
    try {
      const res = await fetch("/api/posts/" 
      // https://col-motors21-04.vercel.app/api/posts",
      , {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(postData),
        
      });
      if(!res.ok){
        throw new Error("HTTP error " + res.status);
      }
      const data = res;
      if (data) {
        router.push(`/users/micuenta/${user?.result?._id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logout = () => {
    // dispatch({ type: LOGOUT });
    router.push("/");
    setUser(null);
  };


  return (
    <>
      <Layout title={"Home | colMotors"}>
        <HomeComponent  createPosts={createPosts} />
      </Layout>
    </>
  );
}
export const getServerSideProps = async () => {
  const { data } = await axios.get(`https://jsonplaceholder.typicode.com/api/posts`);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const posts = data;
  return {
    props: {
      posts,
    },
  };
};
// export async function getServerSideProps() {
//   try {
//     await DBConnect();
//     const res = await postModel.find();
//     const Postss = res.map((el) => {
//       const Post = el.toObject();

//       Post._id = Post._id.toString();
//       Post.creator = Post.creator.toString();
//       Post.cotizaciones = Post.cotizaciones.toString();
//       Post.date = Post.date.toString();

//       return Post;
//     });
//     return {
//       props: { Postss,
        
//       }
//     };
//   } catch (error) {
//     console.log(error);
//   }
// }
