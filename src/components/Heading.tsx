import { FC } from 'react'

export const Heading: FC<{ type: string; content: string }> = (props) => {
  return <h1 className={'p-5 bg-lime-400'}>{props.content}</h1>
}
