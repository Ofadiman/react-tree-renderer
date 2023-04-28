import { FC } from 'react'
import { faker } from '@faker-js/faker'

export const Rectangle: FC<{ text: string }> = (props) => {
  return (
    <div
      style={{
        padding: 20,
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
      }}
    >
      {props.text}
    </div>
  )
}
