import { Button } from "@material-ui/core";
import Layout from '../../../components/Layout/Layout'
import { useRouter } from "next/router";
import Confirm from "../../../components/Auth/confirm";


export default function ConfirmAccount(){
    const router = useRouter()


    const confirm = async(id)=>{
        try {
            const res = await fetch(`/api/auth/confirm/${id}`)
             
            if(res.ok){
              router.push("/home")
              // setMessage('Eliminado correctamente')
             }
              
          } catch (error) {
            console.log(error);
          }
    }
    return(
        <Layout>
            <Confirm confirm={confirm}/>
        </Layout>
    )
}

