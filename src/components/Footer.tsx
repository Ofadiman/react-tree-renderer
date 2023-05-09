import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { NodeType } from '../websiteMap.tsx'

export type FooterNode = {
  id: string
  type: NodeType.Footer
  props: {
    links: Array<{ text: string; to: string }>
  }
  meta: {
    height: number
  }
  children: []
}

type NodeArgs = {
  links: Array<{ text: string; to: string }>
}

export class FooterExtension implements Extension<NodeArgs, FooterNode> {
  node(args: NodeArgs): FooterNode {
    return {
      id: 'footer',
      type: NodeType.Footer,
      props: {
        links: args.links,
      },
      meta: {
        height: 500,
      },
      children: [],
    }
  }

  render(node: FooterNode): ReactNode {
    return (
      <footer
        key={node.id}
        className={'flex items-center justify-center bg-fuchsia-400 flex-col gap-5 p-5'}
      >
        {node.props.links.map((link) => {
          return (
            <a href={link.to} key={link.to} className={'text-white hover:underline'}>
              {link.text}
            </a>
          )
        })}
      </footer>
    )
  }
}
