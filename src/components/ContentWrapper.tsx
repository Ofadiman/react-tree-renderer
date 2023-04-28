import { FC, PropsWithChildren } from 'react'

export const ContentWrapper: FC<PropsWithChildren> = (props) => {
  return <div className={'max-w-[900px] mx-auto'}>{props.children}</div>
}
