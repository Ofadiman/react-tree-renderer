import { ReactNode } from 'react'
import { NodeType } from '../websiteMap.tsx'
import { Extension } from '../extension.ts'

export type ParagraphNode = {
  id: string
  type: NodeType.Paragraph
  meta: {
    length: number
  }
  children: []
  props: {
    lines: string
  }
}

export type NodeArgs = {
  lines: string
}

export class ParagraphExtension implements Extension<NodeArgs, ParagraphNode> {
  node(args: NodeArgs): ParagraphNode {
    return {
      id: Math.random().toString(),
      meta: {
        length: args.lines.length,
      },
      type: NodeType.Paragraph,
      props: {
        lines: args.lines,
      },
      children: [],
    }
  }

  render(node: ParagraphNode): ReactNode {
    return (
      <p key={node.id} className={'p-5 bg-lime-400'}>
        {node.props.lines}
      </p>
    )
  }
}
