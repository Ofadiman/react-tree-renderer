import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { Node, NodeType } from '../websiteMap.tsx'

type NodeArgs = {
  children: Node[]
}

export type ContentWrapperNode = {
  id: string
  type: NodeType.ContentWrapper
  props: {}
  children: Node[]
  meta: {}
}

export class ContentWrapperExtension implements Extension<NodeArgs, ContentWrapperNode> {
  node(args: NodeArgs): ContentWrapperNode {
    return {
      props: {},
      meta: {},
      children: args.children,
      type: NodeType.ContentWrapper,
      id: 'content-wrapper',
    }
  }

  render(node: ContentWrapperNode, children: ReactNode): ReactNode {
    return (
      <div key={node.id} className={'max-w-[900px] mx-auto'}>
        {children}
      </div>
    )
  }
}
