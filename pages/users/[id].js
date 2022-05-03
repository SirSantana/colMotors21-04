import { useEffect, useState } from "react";
import Perfil from "../../components/MenuPerfil/Perfil/Perfil";
import Layout from "../../components/Layout/Layout";



export default function UserPerfil(){
    const [userr, setUserr] = useState(null)
    useEffect(()=>{
        setUserr(JSON.parse(localStorage.getItem("profile")));

    },[])
    return(
        <Layout title={'Mi perfil | colMotors'}>
        <Perfil userr={userr}/>
        </Layout>

    )
}