import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { NodeType } from '../websiteMap.tsx'

export type NavbarNode = {
  props: {}
  id: string
  type: NodeType.Navbar
  meta: {
    height: number
  }
  children: []
}

export class NavbarExtension implements Extension<void, NavbarNode> {
  node(): NavbarNode {
    return {
      meta: {
        height: 64,
      },
      props: {},
      children: [],
      type: NodeType.Navbar,
      id: 'navbar',
    }
  }

  render(node: NavbarNode): ReactNode {
    return (
      <nav key={node.id} className={'h-16 bg-blue-400 text-white flex justify-center items-center'}>
        <p>this is hardcoded navbar</p>
      </nav>
    )
  }
}
