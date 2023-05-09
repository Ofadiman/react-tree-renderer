import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { NodeType } from '../websiteMap.tsx'

export type DashboardItemNode = {
  id: string
  type: NodeType.DashboardItem
  props: {
    text: string
  }
  meta: {}
  children: []
}

type NodeArgs = {
  text: string
  id: string
}

export class DashboardItemExtension implements Extension<NodeArgs, DashboardItemNode> {
  node(args: NodeArgs): DashboardItemNode {
    return {
      children: [],
      meta: {},
      id: args.id,
      type: NodeType.DashboardItem,
      props: {
        text: args.text,
      },
    }
  }

  render(node: DashboardItemNode): ReactNode {
    return (
      <div key={node.id} className={'p-5 bg-lime-400'}>
        {node.props.text}
      </div>
    )
  }
}
