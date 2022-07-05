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
        <link href="https://fonts.googleapis.com/css2?family=Mingzat&display=swap" rel="stylesheet"/>
        </Head>
        
        <main className={styles.main}><Navbar/>{children}</main>
      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          quarks | Colombia
          <span className={styles.logo}>
            <Image src="/images/LogoQuarks1PNG.png" alt="colMotors Logo" width={60} height={60} />
          </span>
        </a>
      </footer>
        </>
    )
}