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
            <Link href={ user?.result.posts.length >=1 ? `/home/${user?.result._id}`: '/home'}>
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
                <Link href={user?.result.posts.length >=1 ? `/home/${user?.result._id}`: '/home'}>
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
                <Button onClick={logout} variant="outlined" color="secondary">
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
                <Link href={user ? '/home':"/auth"}>
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


        
        <div className={styles.card}>
        <h2 style={{marginLeft:'8px'}}>Marcas</h2>
        <p></p>
          <div style={{display:'flex', flexDirection:'row', flexWrap:'wrap'}}>
          <section className={styles.card} style={{ margin:'10px',idth:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>
          <Image
          src={"/images/logoChevrolet.png"}
          width='60px'
          height='60px'
          />
          </section>
          <section className={styles.card} style={{margin:'10px',width:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>

          <Image
          src={"/images/mazdaLogo.png"}
          width='60px'
          height='60px'
          />
          </section>
          <section className={styles.card} style={{margin:'10px',width:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>

          <Image
          src={"/images/logoRenault.png"}
          width='60px'
          height='60px'
          />
          </section>
          <section className={styles.card} style={{margin:'10px',width:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>

          <Image
          src={"/images/logoKia.png"}
          width='60px'
          height='60px'
          />
          </section>
          <section className={styles.card} style={{margin:'10px',width:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>

          <Image
          src={"/images/logoNissan.png"}
          width='60px'
          height='60px'
          />
          </section>

          <section className={styles.card} style={{margin:'10px',width:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>
          <Image
          src={"/images/logoFord1.png"}
          width='60px'
          height='60px'
          />
          </section>
          <section className={styles.card} style={{margin:'10px',width:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>

          <Image
          src={"/images/logoVolkswagen1.png"}
          width='60px'
          height='60px'
          />
          </section>

          <section className={styles.card} style={{margin:'10px',width:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>
          <Image
          src={"/images/logoToyota1.png"}
          width='60px'
          height='60px'
          />
          </section>

          </div>
        </div>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
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
