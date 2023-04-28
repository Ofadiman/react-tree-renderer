import { FC } from 'react'
import { faker } from '@faker-js/faker'

export const Placeholder: FC<{ id: string }> = (props) => {
  return (
    <div
      style={{
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
        padding: 20,
      }}
    >
      renders ad {props.id}
    </div>
  )
}
