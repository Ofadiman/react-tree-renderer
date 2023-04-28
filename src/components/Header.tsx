import { FC } from 'react'
import { faker } from '@faker-js/faker'

export const Header: FC<{ title: string; description: string; source: string }> = (props) => {
  return (
    <header
      style={{
        aspectRatio: '16/9',
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
        padding: 20,
      }}
    >
      <p>Simulating something real here</p>
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.source}</p>
    </header>
  )
}
