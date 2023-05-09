import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { Node, NodeType } from '../websiteMap.tsx'

export type AsideNode = {
  id: string
  props: {}
  children: Node[]
  type: NodeType.Aside
  meta: {}
}

export class AsideExtension implements Extension<void, AsideNode> {
  node(): AsideNode {
    return {
      children: [],
      props: {},
      meta: {},
      type: NodeType.Aside,
      id: 'aside',
    }
  }

  render(node: AsideNode, children: ReactNode): ReactNode {
    return (
      <aside key={node.id} className={'p-5 bg-yellow-200 h-fit'}>
        {children}
      </aside>
    )
  }
}
