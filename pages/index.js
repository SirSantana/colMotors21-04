import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import {useRouter} from 'next/router'
import { Button } from"@material-ui/core";
import { LOGOUT } from '../reducers/type'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import ImageMarca from '../components/Home/Image'
import ButtonLink from '../components/Button'
import { handleLogout } from '../utils/handleLogout'

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
        <section className={styles.card1} >
          <div className={styles.containerText}>
            <h4 className={styles.description2}>
              Cotiza los repuestos de tu auto en{" "}
            </h4>
            <h1 className={styles.description1}>30 Minutos</h1>
            <ButtonLink text={'Cotiza Aquí'} variant={'contained'} color='secondary' to={'/home'}/>
          </div>
        </section>

       
        <section className={styles.card} style={{display:'flex', flexDirection:'row', margin:'10px',idth:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>
          <Image
          src={"/images/iconTime.png"}
          width='40px'
          height='40px'
          />
         <div style={{display:'flex', marginLeft:'10px', flexDirection:'column'}}>
         <h2 style={{margin:0}}>Ahorra Tiempo</h2>
          <h4 style={{margin:0}}>Cotiza con distintos vendedores sin salir de casa</h4>
         </div>
          </section>
        

        <div className={styles.card}>
          <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
          {marcas.map(marca=> <ImageMarca marca={marca}/>)}
          </div>
        </div>

        <section className={styles.card}>
          {user ? (
            <>
              <div className={styles.containerButtons}>
                
                <ButtonLink text={'Ve a cotizar!'} to={'/home'} variant={'contained'} color='primary'/>
                <Button onClick={()=>handleLogout(setUser, router, dispatch)} variant="outlined" color="secondary">
                  Cerrar Sesion
                </Button>
              </div>
            </>
          ) : (
            <>
              <div className={styles.containerButtons}>
                
                <ButtonLink text={'Iniciar Sesion'} to={user ? '/home':"/auth"} color={'primary'} variant='contained'/>
                <ButtonLink text={'Registrarse'} to={"/auth"} color={'secondary'} variant='contained'/>
               
              </div>
            </>
          )}
        </section>


        
      

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
