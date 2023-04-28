import { FC } from 'react'
import { faker } from '@faker-js/faker'

export const Authors: FC<{ authors: Array<{ id: string; name: string }> }> = (props) => {
  if (props.authors.length === 0) {
    return null
  }

  const joined = props.authors.map((author) => author.name).join(', ')
  return (
    <p
      style={{
        padding: 20,
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
      }}
    >
      {joined}
    </p>
  )
}
