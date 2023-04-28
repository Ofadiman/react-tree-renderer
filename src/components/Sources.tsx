import { FC } from 'react'
import { faker } from '@faker-js/faker'

export const Sources: FC<{ sources: Array<{ id: string; source: string }> }> = (props) => {
  if (props.sources.length === 0) {
    return null
  }

  const joined = props.sources.map((source) => source.source).join(', ')
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
