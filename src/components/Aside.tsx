import { FC } from 'react'
import { RectangleNode } from './Rectangle'
import { NodeFactory } from './NodeFactory'

export type AsideNode = {
  id: number
  type: 'aside'
  children: RectangleNode[]
}

export const Aside: FC<{ node: AsideNode }> = (props) => {
  return (
    <aside className="w-[240px] h-100 bg-green-100">
      {props.node.children.map((child) => {
        return <NodeFactory key={child.id} node={child} />
      })}
    </aside>
  )
}
