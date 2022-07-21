import Layout from "../../../components/Layout/Layout";
import Gasolina from "../../../components/MenuPerfil/Gasolina/Gasolina";
import {useRouter} from 'next/router'
import DBConnect from "../../../libs/dbConnect";
import gasolinaModel from "../../../models/gasolinaModel";


export default function GasolinaRoute({Gasolinaa}){
    const router = useRouter()
    console.log(Gasolinaa);
    return(
        <Layout title={"Consumo | Quarks"}>
            <Gasolina gasolina={Gasolinaa}/>
        </Layout>
    )
}
export async function getServerSideProps({params}){
    console.log(params.id);
    try {
        await DBConnect()
        const resGasolina = await gasolinaModel.find({vehiculo:params.id})
          const Gasolinaa = resGasolina.map((el)=>{

            const gasolina = el.toObject()

            gasolina._id = gasolina._id.toString()
            gasolina.owner = gasolina.owner.toString()
            gasolina.vehiculo = gasolina.vehiculo.toString()
            gasolina.fecha = gasolina.fecha.toString()

            return gasolina
          })
          return {
            props: {Gasolinaa}
        }
    } catch (error) {
        console.log(error);
    }
}