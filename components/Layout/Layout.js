import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../Navbar/Navbar'
import styles from './Layout.module.css'

export default function Layout({children, title, description}){
    return(
        <>
        <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        
        <main className={styles.main}><Navbar/>{children}</main>
      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          colMotors | Colombia
          <span className={styles.logo}>
            <Image src="/images/logo_colmotors.jpg" alt="colMotors Logo" width={62} height={66} />
          </span>
        </a>
      </footer>
        </>
    )
}