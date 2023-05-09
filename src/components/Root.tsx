import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { Node, NodeType } from '../websiteMap.tsx'

type RootNode = {
  id: string
  type: NodeType.Root
  props: {}
  children: Node[]
  meta: {}
}

type NodeArgs = {
  children: Node[]
}

export class RootExtension implements Extension<NodeArgs, RootNode> {
  node(args: NodeArgs): RootNode {
    return {
      type: NodeType.Root,
      id: 'root',
      props: {},
      children: args.children,
      meta: {},
    }
  }

  render(_node: Node, children: ReactNode): ReactNode {
    return <>{children}</>
  }
}
