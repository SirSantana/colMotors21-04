import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from '../components/Layout/Layout'
import {useRouter} from 'next/router'
import { Button } from"@material-ui/core";
import { LOGOUT } from '../reducers/type'
import { useDispatch } from 'react-redux'
import Image from 'next/image'

export default function Home() {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch()
  const router = useRouter()
  
  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);

    router.push("/");
  };


  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [router,dispatch]);
  
  return (
    <Layout title="Lobby | colMotors">
      <div className={styles.grid}>
        <section className={styles.card1}>
          <div className={styles.containerText}>
            <h4 className={styles.description2}>
              Cotiza los repuestos de tu auto en{" "}
            </h4>
            <h1 className={styles.description1}>30 Minutos</h1>
            <Link href={user ? '/home': '/auth'}>
              <a>
                <Button
                  className={styles.button}
                  color="secondary"
                  variant="contained"
                >
                  COTIZA YA!
                </Button>
              </a>
            </Link>
          </div>
        </section>

        <section className={styles.card}>
          {user ? (
            <>
              <div className={styles.containerButtons}>
                <Link href={"/home"}>
                  <a>
                    <Button
                      className={styles.btn}
                      variant="contained"
                      color="primary"
                    >
                      Ve a cotizar!
                    </Button>
                  </a>
                </Link>
                <Button onClick={logout} variant="contained" color="secondary">
                  Cerrar Sesion
                </Button>
              </div>
            </>
          ) : (
            <>
              <div>
                <h2>1. Registrate o Inicia Sesion &rarr;</h2>
                <Link href={"/home"}>
                <a>
                  <button>Ver Posts</button>
                </a>
                </Link>
              </div>
              <div className={styles.containerButtons}>
                <Link href={"/auth"}>
                  <a>
                    <Button
                      className={styles.btn}
                      variant="contained"
                      color="primary"
                    >
                      Iniciar Sesion
                    </Button>
                  </a>
                </Link>
                <Link href={"/auth"}>
                  <a>
                    <Button variant="contained" color="secondary">
                      Registrarse
                    </Button>
                  </a>
                </Link>
              </div>
            </>
          )}
        </section>


        
        <a href="/home" className={styles.card2}>
        <h2>2. Sigue estos pasos para cotizar &rarr;</h2>
        <p></p>
          
        <Image
          src={'/images/BocetoPasosCotizar2.png'}
          width='700px'
          height='600px'
          />
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
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
