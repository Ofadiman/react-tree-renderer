import { FC } from 'react'

export const Footer: FC<{ links: Array<{ text: string; to: string }> }> = (props) => {
  return (
    <footer
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(40, 200, 245, 0.5)',
        flexDirection: 'column',
        gap: 20,
        padding: 20
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
