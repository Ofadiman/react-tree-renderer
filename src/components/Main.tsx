import { FC, PropsWithChildren } from 'react'

export const Main: FC<PropsWithChildren> = (props) => {
  return (
    <main style={{ padding: 20, backgroundColor: 'rgba(255, 0, 255, 0.5)' }}>{props.children}</main>
  )
}
