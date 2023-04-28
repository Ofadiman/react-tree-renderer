import { FC } from 'react'
import { faker } from '@faker-js/faker'

export const Navbar: FC = () => {
  return (
    <nav
      style={{
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
        height: 64,
      }}
    >
      this is hardcoded navbar
    </nav>
  )
}
