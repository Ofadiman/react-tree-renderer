import { FC, PropsWithChildren } from 'react'

export const Aside: FC<PropsWithChildren> = (props) => {
  return <aside className={'p-5 bg-yellow-200 h-fit'}>{props.children}</aside>
}
