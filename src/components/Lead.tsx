import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { NodeType } from '../websiteMap.tsx'

export type LeadNode = {
  id: string
  type: NodeType.Lead
  meta: {
    length: number
  }
  children: []
  props: {
    text: string
  }
}

export type NodeArgs = {
  text: string
}

export class LeadExtension implements Extension<NodeArgs, LeadNode> {
  node(args: NodeArgs): LeadNode {
    return {
      id: 'lead',
      meta: {
        length: args.text.length,
      },
      type: NodeType.Lead,
      children: [],
      props: {
        text: args.text,
      },
    }
  }

  render(node: LeadNode): ReactNode {
    return (
      <p key={node.id} className={'p-5 bg-lime-400'}>
        {node.props.text}
      </p>
    )
  }
}
