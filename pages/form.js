import Form from "../components/Form/Form";
import Layout from "../components/Layout/Layout";
import styles from '../styles/Home.module.css'

export default function FormRoute(){
    return(
        <>
            <Layout title={'Cotizar | colMotors'}>
                <div style={{width:'350px', marginTop:'20px'}}>
                <Form/>

                </div>
            </Layout>
        </>
    )
}