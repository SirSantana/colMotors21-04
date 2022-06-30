import Link from "next/link";
import Layout from "../../components/Layout/Layout";
// import FormPost from "../../components/FormPost";
import Posts from "../../components/Posts/Posts";


export default function Prueba() {

  return (
    <>
      <Layout title={"Posts | colMotors"}>
        <Posts />
      </Layout>
    </>
  );
}
