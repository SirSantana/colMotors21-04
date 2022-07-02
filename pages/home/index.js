import Layout from "../../components/Layout/Layout";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import HomeComponent from "../../components/Home/Home";
import { useDispatch, useSelector } from "react-redux";



export default function Home() {
  const router = useRouter()
  

  
  
  return (
    <>
      <Layout title={"Home | colMotors"}>
        <HomeComponent/>
      </Layout>
    </>
  );
}
// export async function getStaticProps() {
//   try {
//     await DBConnect();
//     const res = await postModel.find().sort([['date', -1]]).limit(3);
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
