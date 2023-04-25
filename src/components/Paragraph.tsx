import { FC } from 'react'

export const Paragraph: FC<{ type: string; lines: string }> = (props) => {
  return <p style={{ padding: 20, backgroundColor: 'rgba(0, 0, 255, 0.5)' }}>{props.lines}</p>
}
