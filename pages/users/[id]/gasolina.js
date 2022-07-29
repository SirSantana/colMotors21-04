import Layout from "../../../components/Layout/Layout";
import Gasolina from "../../../components/MenuPerfil/Gasolina/Gasolina";
import { useRouter } from "next/router";
import DBConnect from "../../../libs/dbConnect";
import gasolinaModel from "../../../models/gasolinaModel";
import vehiculoModel from "../../../models/vehiculoModel";

export default function GasolinaRoute({ Gasolinaa, tanqueGasolina, ownerVehicule }) {

  return (
    <Layout title={"Consumo | Quarks"}>
      <Gasolina gasolina={Gasolinaa} tanque={tanqueGasolina} ownerVehicule={ownerVehicule}/>
    </Layout>
  );
}
export async function getServerSideProps({ params }) {
  try {
    await DBConnect();
    const vehicule = await vehiculoModel.findById(params.id);

    const resGasolina = await gasolinaModel.find({ vehiculo: params.id });
    const Gasolinaa = resGasolina.map((el) => {
      const gasolina = el.toObject();
      gasolina._id = gasolina._id.toString();
      gasolina.owner = gasolina.owner.toString();
      gasolina.vehiculo = gasolina.vehiculo.toString();
      gasolina.fecha = gasolina.fecha.toString();

      return gasolina;
    });
    let ownerVehicule =vehicule.owner.toString()

    let tanqueGasolina;
    if (vehicule.tanqueGasolina !== undefined) {
      tanqueGasolina = vehicule.tanqueGasolina;
      return {
        props: { Gasolinaa, tanqueGasolina, ownerVehicule },
      };
    }
    return {
      props: { Gasolinaa, ownerVehicule},
    };
  } catch (error) {
    console.log(error);
  }
}
