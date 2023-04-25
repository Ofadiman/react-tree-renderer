import { FC, PropsWithChildren } from 'react'

export const Aside: FC<PropsWithChildren> = (props) => {
  return (
    <aside style={{ padding: 20, backgroundColor: 'rgba(128, 0, 255, 0.5)' }}>
      {props.children}
    </aside>
  )
}
