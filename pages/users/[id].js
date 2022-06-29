import Layout from "../../components/Layout/Layout";
import DBConnect from "../../libs/dbConnect";
import userModel from "../../models/userModel";
import PerfilVendedor from "../../components/MenuPerfil/Perfil/PerfilVendedor";
import PerfilCliente from "../../components/MenuPerfil/Perfil/PerfilCliente";

export default function UserPerfil({ user }) {
  

  return (
    <Layout title={"Mi perfil | colMotors"}>
      {user.role.length > 1 
        ?<PerfilVendedor user={user}/>
      : <PerfilCliente user={user}/>
      }
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const {id} = params
  if(id !== 'R'){
    try {
      await DBConnect();
  
      const res = await userModel.findById(params.id);
      const user = res.toObject();
      user._id = user._id.toString()
      user.posts = null
      user.cotizaciones = null
      return {
        props: {user},
      };
    } catch (error) {
      console.log(error.data)
  }
  }else{
    return null
  }
      
}
