import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
// import decode from "jwt-decode";
// import { LOGOUT } from "../../Reducers/Types";
import { useRouter } from "next/router";
import HomeComponent from "../../components/Home/Home";
import DBConnect from "../../libs/dbConnect";
import { getPosts } from "../../reducers/Actions/postActions";
import { useDispatch } from "react-redux";
import postModel from "../../models/postModel";

// import postModel from "../../models/postModel";


export default function Home({Postss}) {
  const [user, setUser] = useState();

  const router = useRouter();
  const [token, setToken] = useState(null)


  const createPosts = async (postData) => {
    try {
      const res = await fetch("https://col-motors21-04.vercel.app/api/posts", {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(postData),
      });
      const data = res;
      if (data) {
        router.push("/home");
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

   
    
  
 
  // useEffect(() => {
  //   setToken(user?.token);

  //   if (token) {
  //     const decodedToken = decode(token);

  //     if (decodedToken.exp * 1000 < new Date().getTime()) logout();
  //   }
  //   setUser(JSON.parse(localStorage.getItem("profile")));
  // }, [router]);

  
  return (
    <>
      <Layout title={"Home | colMotors"}>
        <HomeComponent Postss={Postss} createPosts={createPosts}/>
      </Layout>
    </>
  );
}
export async function getServerSideProps() {
  try {
    await DBConnect();
    const res = await postModel.find();
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