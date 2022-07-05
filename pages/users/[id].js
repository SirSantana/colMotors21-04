import Layout from "../../components/Layout/Layout";
import DBConnect from "../../libs/dbConnect";
import userModel from "../../models/userModel";
import PerfilVendedor from "../../components/MenuPerfil/Perfil/PerfilVendedor";
import PerfilCliente from "../../components/MenuPerfil/Perfil/PerfilCliente";
import vehiculoModel from "../../models/vehiculoModel";

export default function UserPerfil({ user, vehicule }) {

  return (
    <Layout title={"Mi perfil | colMotors"}>
      {user.role.length > 1 
        ?<PerfilVendedor user={user}/>
      : <PerfilCliente user={user} vehicule={vehicule}/>
      }
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  const {id} = params
    try {
      await DBConnect();
  
      const res = await userModel.findById(params.id);
      const user = res.toObject();
      user._id = user._id.toString()
      user.vehiculos = user.vehiculos.toString()
      user.posts = null
      user.cotizaciones = null

      if(user.vehiculos){
        const resVehicule = await vehiculoModel.findById(user.vehiculos)
        const vehicule = resVehicule.toObject()
        vehicule._id = vehicule._id.toString()
        vehicule.owner = vehicule.owner.toString()
        return {
        props: {user, vehicule},

        }
      }
      
      return {
        props: {user},
      };
    } catch (error) {
      console.log(error.data)
  }
      
}
