import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { NodeType } from '../websiteMap.tsx'

export type NodeArgs = {
  title: string
  description: string
  source: string
}

export type HeaderNode = {
  id: string
  type: NodeType.Header
  meta: {
    height: number
  }
  children: []
  props: {
    title: string
    description: string
    source: string
  }
}

export class HeaderExtension implements Extension<NodeArgs, HeaderNode> {
  node(args: NodeArgs): HeaderNode {
    return {
      children: [],
      meta: {
        height: 400,
      },
      id: 'header',
      type: NodeType.Header,
      props: args,
    }
  }

  render(node: HeaderNode): ReactNode {
    return (
      <header
        key={node.id}
        className={
          'bg-emerald-400 p-5 aspect-video flex items-center justify-center gap-4 flex-col'
        }
      >
        <p>{node.props.title}</p>
        <p>{node.props.description}</p>
        <p>{node.props.source}</p>
      </header>
    )
  }
}
