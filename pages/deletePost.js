import DeletePost from "../components/DeletePage";
import Layout from "../components/Layout/Layout";



export default function DeletePosts(){
    return(
        <Layout title={'Publicacion Eliminada'}>
        <DeletePost />
        </Layout>
    )
}