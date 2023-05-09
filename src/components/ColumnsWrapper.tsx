import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { Node, NodeType } from '../websiteMap.tsx'

type NodeArgs = {
  children: Node[]
}

export type ColumnsWrapperNode = {
  id: string
  type: NodeType.ColumnsWrapper
  props: {}
  meta: {}
  children: Node[]
}

export class ColumnsWrapperExtension implements Extension<NodeArgs, ColumnsWrapperNode> {
  node(args: NodeArgs): ColumnsWrapperNode {
    return {
      type: NodeType.ColumnsWrapper,
      props: {},
      meta: {},
      children: args.children,
      id: 'columns-wrapper',
    }
  }

  render(node: ColumnsWrapperNode, children: ReactNode): ReactNode {
    return (
      <div key={node.id} className={'md:flex md:mx-auto'}>
        {children}
      </div>
    )
  }
}
