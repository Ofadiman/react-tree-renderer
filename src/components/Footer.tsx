import { FC } from 'react'

export const Footer: FC<{ links: Array<{ text: string; to: string }> }> = (props) => {
  return (
    <footer className={'flex items-center justify-center bg-fuchsia-400 flex-col gap-5 p-5'}>
      {props.links.map((link) => {
        return (
          <a href={link.to} key={link.to} className={'text-white hover:underline'}>
            {link.text}
          </a>
        )
      })}
    </footer>
  )
}
