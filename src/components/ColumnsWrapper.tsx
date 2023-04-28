import { FC, PropsWithChildren } from 'react'

export const ColumnsWrapper: FC<PropsWithChildren> = (props) => {
  return <div className={'md:flex md:mx-auto'}>{props.children}</div>
}
