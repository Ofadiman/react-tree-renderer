import { FC } from 'react'

export const Heading: FC<{ type: string; content: string }> = (props) => {
  return <h1 style={{ padding: 20, backgroundColor: 'rgba(255, 192, 0, 0.5)' }}>{props.content}</h1>
}
