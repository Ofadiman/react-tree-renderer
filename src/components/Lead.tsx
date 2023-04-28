import { FC } from 'react'
import {faker} from '@faker-js/faker'

export const Lead: FC<{ lead: string }> = (props) => {
  return (
    <p
      style={{
        padding: 20,
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
      }}
    >
      {props.lead}
    </p>
  )
}
