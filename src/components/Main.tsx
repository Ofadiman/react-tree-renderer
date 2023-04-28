import { FC, PropsWithChildren } from 'react'

export const Main: FC<PropsWithChildren> = (props) => {
  return <main className={'flex-grow p-5 bg-purple-400'}>{props.children}</main>
}
