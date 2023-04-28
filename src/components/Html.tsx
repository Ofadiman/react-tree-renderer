import { FC } from 'react'
import {faker} from '@faker-js/faker'

export const Html: FC<{ type: string; html: string }> = (props) => {
  return (
    <div
      style={{
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
        padding: 20,
      }}
      dangerouslySetInnerHTML={{ __html: props.html }}
    ></div>
  )
}
