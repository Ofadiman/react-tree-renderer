import { FC } from 'react'

export const Header: FC<{ title: string; description: string; source: string }> = (props) => {
  return (
    <header style={{ aspectRatio: '16/9', backgroundColor: 'rgba(255, 0, 0, 0.5)', padding: 20 }}>
      <p>Simulating something real here</p>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.source}</p>
    </header>
  )
}
