import { ReactNode } from 'react'
import { NodeType } from '../websiteMap.tsx'
import { Extension } from '../extension.ts'

type RectangleNode = {
  id: string
  type: NodeType.Rectangle
  props: {
    text: string
  }
  meta: {
    width: number
    height: number
  }
  children: []
}

type NodeArgs = {
  text: string
}

export class RectangleExtension implements Extension<NodeArgs, RectangleNode> {
  node(args: NodeArgs): RectangleNode {
    return {
      id: Math.random().toString(),
      type: NodeType.Rectangle,
      meta: {
        width: 50,
        height: 50,
      },
      props: {
        text: args.text,
      },
      children: [],
    }
  }

  render(node: RectangleNode): ReactNode {
    return (
      <div key={node.id} className={'p-5 bg-indigo-400'}>
        {node.props.text}
      </div>
    )
  }
}
