import { FC, PropsWithChildren } from 'react'
import { faker } from '@faker-js/faker'

export const Aside: FC<PropsWithChildren> = (props) => {
  return (
    <aside
      style={{
        padding: 20,
        width: 150,
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
      }}
    >
      {props.children}
    </aside>
  )
}
