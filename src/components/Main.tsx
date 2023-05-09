import { ReactNode } from 'react'
import { Node, NodeType } from '../websiteMap.tsx'
import { Extension } from '../extension.ts'

export type MainNode = {
  children: Node[]
  id: string
  type: NodeType.Main
  meta: {}
  props: {}
}

export class MainExtension implements Extension<void, MainNode> {
  render(node: Node, children: ReactNode): ReactNode {
    return (
      <main key={node.id} className={'flex-grow p-5 bg-purple-400'}>
        {children}
      </main>
    )
  }

  node(): MainNode {
    return {
      children: [],
      type: NodeType.Main,
      id: 'main',
      props: {},
      meta: {},
    }
  }
}
