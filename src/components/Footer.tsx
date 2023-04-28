import { FC } from 'react'
import { faker } from '@faker-js/faker'

export const Footer: FC<{ links: Array<{ text: string; to: string }> }> = (props) => {
  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
        flexDirection: 'column',
        gap: 20,
        padding: 20,
      }}
    >
      {props.links.map((link) => {
        return (
          <a href={link.to} key={link.to}>
            {link.text}
          </a>
        )
      })}
    </footer>
  )
}
