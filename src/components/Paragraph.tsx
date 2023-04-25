import { FC } from 'react'

export const Paragraph: FC<{ type: string; lines: string }> = (props) => {
  return <p>{props.lines}</p>
}
