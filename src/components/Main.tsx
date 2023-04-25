import { FC, PropsWithChildren } from 'react'
import styles from './Main.module.css'

export const Main: FC<PropsWithChildren> = (props) => {
  return <main className={styles.wrapper}>{props.children}</main>
}
