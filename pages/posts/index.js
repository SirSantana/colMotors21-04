import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout/Layout";
// import FormPost from "../../components/FormPost";
import Posts from "../../components/Posts/Posts";
import DBConnect from "../../libs/dbConnect";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../reducers/Actions/postActions";

export default function Prueba() {
  const {posts, isLoading} = useSelector(state=>state.posts)
  return (
    <>
      <Layout title={'Posts | colMotors'}>
        <Posts posts={posts} isLoading={isLoading} />
      </Layout>
    </>
  );
}

