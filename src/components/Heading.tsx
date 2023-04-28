import { FC } from 'react'
import { faker } from '@faker-js/faker'

export const Heading: FC<{ type: string; content: string }> = (props) => {
  return (
    <h1
      style={{
        padding: 20,
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
      }}
    >
      {props.content}
    </h1>
  )
}
