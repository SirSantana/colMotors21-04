import styles from '../../styles/Home.module.css'
import Image from 'next/image'

export default function ImageMarca({marca}){
    return(
        <>
        <section className={styles.card} style={{margin:'10px',width:'fit-content',padding:'10px',height:'fit-content', alignItems:'center'}}>
          <Image
          src={`/images/${marca}.png`}
          width='60px'
          height='60px'
          />
          </section>
        </>
    )
}