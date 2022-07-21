import Layout from "../../components/Layout/Layout";
import DBConnect from "../../libs/dbConnect";
import userModel from "../../models/userModel";
import PerfilVendedor from "../../components/MenuPerfil/Perfil/PerfilVendedor";
import PerfilCliente from "../../components/MenuPerfil/Perfil/PerfilCliente";
import vehiculoModel from "../../models/vehiculoModel";
import gasolinaModel from "../../models/gasolinaModel";

export default function UserPerfil({ user, vehicule, Gasolina }) {
  console.log( Gasolina);

  return (
    <Layout title={"Mi perfil | colMotors"}>
      {user.role.length > 1 
        ?<PerfilVendedor user={user}/>
      : <PerfilCliente user={user} vehicule={vehicule} gasolina={Gasolina}/>
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
        vehicule.gasolina = vehicule.gasolina.toString()


        if(vehicule.gasolina.length>0){
          
          const resGasolina = await gasolinaModel.find({vehiculo:vehicule._id})

          const Gasolina =resGasolina.map((el)=>{
            const gasolina = el.toObject()
            gasolina._id = gasolina._id.toString()
            gasolina.owner = gasolina.owner.toString()
            gasolina.vehiculo = gasolina.vehiculo.toString()
            gasolina.fecha = gasolina.fecha.toString()
            
            return gasolina
          })
          return {
            props: {user, vehicule, Gasolina},
            }
          }
          else{
            return {
              props: {user, vehicule},
      
              }
          }
          
        
        
      }
      
      return {
        props: {user},
      };
    } catch (error) {
      console.log(error.data)
  }
      
}
