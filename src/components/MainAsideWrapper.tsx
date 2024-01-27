import { FC } from 'react'
import { AsideNode } from './Aside'
import { MainNode } from './Main'
import { NodeFactory } from './NodeFactory'

export type MainAsideWrapperNode = {
  id: number
  type: 'main-aside-wrapper'
  children: Array<AsideNode | MainNode>
}

export const MainAsideWrapper: FC<{ node: MainAsideWrapperNode }> = (props) => {
  return (
    <div className="flex grow">
      {props.node.children.map((child) => {
        return <NodeFactory key={child.id} node={child} />
      })}
    </div>
  )
}
