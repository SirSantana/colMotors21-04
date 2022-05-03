import Layout from '../../../components/Layout/Layout'
import MiCuenta from '../../../components/MenuPerfil/MiCuenta/MiCuenta'
import { useState, useEffect } from 'react'
import postModel from '../../../models/postModel'
import DBConnect from '../../../libs/dbConnect'


export default function MiCuentaa({Postss}){
    
    return(
        <>
        <Layout title={'Mi Cuenta | colMotors'}>
            <MiCuenta  Posts={Postss}/>
        </Layout>
        </>
    )
}

export async function getServerSideProps() {
    try {
      await DBConnect();
      const res = await postModel.find();
      const Postss = res.map((el) => {
        const Post = el.toObject();
  
        Post._id = Post._id.toString();
        Post.creator = Post.creator.toString();
        Post.cotizaciones = Post.cotizaciones.toString();
        Post.date = Post.date.toString();
        return Post;
      });
      return {
        props: { Postss },
      };
    } catch (error) {
      console.log(error);
    }
  }