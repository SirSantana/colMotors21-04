import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
// import FormPost from "../../components/FormPost";
import Posts from "../../components/Posts/Posts";

import axios, { Axios } from "axios";

export default function Prueba({posts}) {

  return (
    <>
      <Layout title={'Posts | colMotors'}>
        <Posts posts={posts}/>
      </Layout>
    </>
  );
}
