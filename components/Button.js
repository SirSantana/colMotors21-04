import { Button } from '@material-ui/core';
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function ButtonLink({text, to, color, variant}) {
  return (
    <>
      <Link href={to}>
        <a>
          <Button
            className={styles.button}
            color={color}
            variant={variant}
          >
            {text}
          </Button>
        </a>
      </Link>
    </>
  );
}
