import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
// import decode from "jwt-decode";
// import { LOGOUT } from "../../Reducers/Types";
import { useRouter } from "next/router";
import HomeComponent from "../../components/Home/Home";
import DBConnect from "../../libs/dbConnect";
import { getPosts } from "../../reducers/Actions/postActions";
import { useDispatch } from "react-redux";

// import postModel from "../../models/postModel";


export default function Home() {
  const [user, setUser] = useState();

  const router = useRouter();
  const [token, setToken] = useState(null)


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
        <HomeComponent />
      </Layout>
    </>
  );
}
// export async function getServerSideProps() {
//   try {
//     await DBConnect();
    // const res = await postModel.find({});
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