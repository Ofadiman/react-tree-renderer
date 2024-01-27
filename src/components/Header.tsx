import { FC } from 'react'

export type HeaderNode = {
  id: number
  type: 'header'
  props: {
    links: Array<{
      to: string
      text: string
    }>
  }
  meta: {
    height: number
  }
}

export const Header: FC<{ node: HeaderNode }> = (props) => {
  return (
    <header className="h-[60px] bg-yellow-100 flex justify-center items-center pl-4">
      <div>icon</div>
      <ul className="ml-auto flex justify-center items-center">
        {props.node.props.links.map((link) => {
          return (
            <li key={link.text}>
              <a className="p-4" href={link.text}>
                {link.text}
              </a>
            </li>
          )
        })}
      </ul>
    </header>
  )
}
