import { useEffect, useState } from "react";
import Perfil from "../../components/MenuPerfil/Perfil/Perfil";
import Layout from "../../components/Layout/Layout";
import { useRouter } from "next/router";
import DBConnect from "../../libs/dbConnect";
import userModel from "../../models/userModel";

export default function UserPerfil({ user }) {
  

  return (
    <Layout title={"Mi perfil | colMotors"}>
      <Perfil user={user} />
    </Layout>
  );
}

export async function getServerSideProps({ params }) {
  console.log(params);
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
