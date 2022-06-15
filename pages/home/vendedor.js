import HomeVendedor from "../../components/Home/HomeVendedor";
import Layout from "../../components/Layout/Layout";
import DBConnect from "../../libs/dbConnect";
import postModel from "../../models/postModel";


export default function HomeSeller({Postss}){



    return(
        <Layout title={"Home Vendedor | colMotors"}>
         <HomeVendedor posts={Postss} />
        </Layout>
    )
}

export async function getServerSideProps() {
    try {
      await DBConnect();
      const res = await postModel.find().sort([['date', -1]]).limit(10);

     const data =  res.filter(el=> el.marca === 'logoRenault' || el.marca=== 'logoFord1')

      const Postss = data.map((el) => {
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