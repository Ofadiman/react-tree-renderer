import { FC } from 'react'

export const Paragraph: FC<{ type: string; lines: string }> = (props) => {
  return <p className={'p-5 bg-lime-400'}>{props.lines}</p>
}
