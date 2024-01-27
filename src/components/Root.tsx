import { FC, PropsWithChildren } from 'react'
import { HeaderNode } from './Header'
import { MainAsideWrapperNode } from './MainAsideWrapper'
import { FooterNode } from './Footer'
import { PlaceholderNode } from './Placeholder'
import { NodeFactory } from './NodeFactory'

export type RootNode = {
  id: number
  type: 'root'
  children: Array<HeaderNode | MainAsideWrapperNode | FooterNode | PlaceholderNode>
}

export const Root: FC<PropsWithChildren<{ node: RootNode }>> = (props) => {
  return (
    <div className="h-screen bg-yellow-50 flex flex-col">
      {props.node.children.map((child) => {
        return <NodeFactory key={child.id} node={child}></NodeFactory>
      })}
    </div>
  )
}
