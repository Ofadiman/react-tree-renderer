import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { NodeType } from '../websiteMap.tsx'

export type HeadingNode = {
  id: string
  type: NodeType.Heading
  props: {
    type: string
    content: string
  }
  meta: {}
  children: []
}

type NodeArgs = {
  type: string
  content: string
}

export class HeadingExtension implements Extension<NodeArgs, HeadingNode> {
  node(args: NodeArgs): HeadingNode {
    return {
      id: Math.random().toString(),
      type: NodeType.Heading,
      meta: {},
      props: {
        type: args.type,
        content: args.content,
      },
      children: [],
    }
  }

  render(node: HeadingNode): ReactNode {
    return (
      <h1 key={node.id} className={'p-5 bg-lime-400'}>
        {node.props.content}
      </h1>
    )
  }
}
