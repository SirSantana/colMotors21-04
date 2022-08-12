import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import {useRouter} from 'next/router'
import { Button } from"@material-ui/core";
import { useDispatch } from 'react-redux'
import ImageMarca from '../components/Home/Image'
import ButtonLink from '../components/Button'
import { handleLogout } from '../utils/handleLogout'
import { AccessTime, CompareArrows } from '@material-ui/icons'

const marcas=['Chevrolet', 'Mazda', 'Ford', 'Toyota', 'Renault', 'Nissan', 'Volkswagen','Kia']

export default function Home() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()
  const router = useRouter()
  
  console.log(user);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [router,dispatch]);
  
  return (
    <Layout title="Lobby | colMotors">
      
      <div className={styles.grid}>
        <section className={styles.card1} style={{background:'#1b333d'}}>
        {/* <img src={'/images/Car accesories.gif'} style={{width:'300px', heigth:'200px'}}/>  */}
          <div className={styles.containerText}>
            <h3 className={styles.description2}>
              Cotiza los repuestos de tu auto en{" "}
            </h3>
            <h4 className={styles.description1}>30 Minutos</h4>
            <Link href='/home'>
            <Button style={{width:'250px'}} variant='contained' color='secondary'>Cotiza Aquí</Button>
            </Link>
          </div>
        </section>

       
        <section className={styles.sectionAtributos}>
          <div className={styles.divAtributo}>
          <CompareArrows fontSize='medium'/>
         <div className={styles.divTexto}>
         <h3 className={styles.texto}>Cotiza y Compara</h3>
          <h4 className={styles.texto1}>Cotiza y compara tu repuesto con distintos vendedores </h4>
          </div>
         </div>
         <div className={styles.divAtributo}>
         <AccessTime fontSize='medium'/>
         <div className={styles.divTexto}>
         <h3 className={styles.texto}>Ahorra Tiempo</h3>
          <h4 className={styles.texto1}>Cotiza con distintos vendedores sin salir de casa</h4>
         </div>
         </div>
         <div className={styles.divAtributo}>
         <AccessTime fontSize='medium'/>
         <div className={styles.divTexto}>
         <h3 className={styles.texto}>Ahorra Tiempo</h3>
          <h4 className={styles.texto1}>Cotiza con distintos vendedores sin salir de casa</h4>
         </div>
         </div>
         
          </section>
        

        <div className={styles.card}>
          <h3  className={styles.subtitle}>Marcas Comercializadas</h3>
          <h3 className={styles.subtitle2}>Podras cotizar por estas 10 marcas, pronto añadiremos mas!</h3>
          
          <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
          {marcas.map(marca=> <ImageMarca marca={marca}/>)}
          </div>
        </div>
        <a
          href="#"
          className={styles.card}
        >
          <h2>¿Eres Vendedor? &rarr;</h2>
          <p>Si quieres ser parte del grupo de vendedores, y empezar a vender mucho mas, escribenos al 
            siguiente correo...
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </div>
    </Layout>
  )
}

// export async function getStaticProps(){
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts")
//   const data = await res.json()

//     if(!data){
//       return{
//         props:{data}
//       }
//     }else{
//       return {
//         props:{data}
//       }
//     }
  
// }
