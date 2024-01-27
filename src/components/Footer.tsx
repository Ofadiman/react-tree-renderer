import { FC } from 'react'

export type FooterNode = {
  id: number
  type: 'footer'
  meta: {
    height: number
  }
  props: {
    links: Array<{ to: string; text: string }>
  }
}

export const Footer: FC<{ node: FooterNode }> = (props) => {
  return (
    <footer className="h-[100px] bg-blue-100 flex items-center justify-center">
      <ul className="flex">
        {props.node.props.links.map((link) => {
          return (
            <li key={link.text}>
              <a href={link.to} className="p-5">
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
    </footer>
  )
}
