import { FC, PropsWithChildren } from 'react'
import styles from './ColumnsWrapper.module.css'

export const ColumnsWrapper: FC<PropsWithChildren> = (props) => {
  return <div className={styles.wrapper}>{props.children}</div>
}
