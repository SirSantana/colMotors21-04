import { useEffect, useState } from "react";
import HomeVendedor from "../../components/Home/HomeVendedor";
import Layout from "../../components/Layout/Layout";
import DBConnect from "../../libs/dbConnect";
import postModel from "../../models/postModel";


export default function HomeSeller({Postss}){

  const [user, setUser] = useState();

  useEffect(()=>{
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[])
  // console.log(user);
  const data =  Postss.filter(el=> el.marca === user?.result.marcasComercializadas.find(ele=> ele === el.marca))
  console.log(Postss);
    return(
        <Layout title={"Home Vendedor | colMotors"}>
         <HomeVendedor posts={data} />
        </Layout>
    )
}

export async function getServerSideProps() {
    try {
      await DBConnect();
      const res = await postModel.find().sort([['date', -1]]);


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