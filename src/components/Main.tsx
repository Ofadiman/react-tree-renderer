import { FC } from 'react'
import { HeadingNode } from './Heading'
import { ParagraphNode } from './Paragraph'
import { HtmlNode } from './Html'
import { AuthorsNode } from './Authors'
import { NodeFactory } from './NodeFactory'

export type MainNode = {
  id: number
  type: 'main'
  children: Array<HeadingNode | ParagraphNode | HtmlNode | AuthorsNode>
}

export const Main: FC<{ node: MainNode }> = (props) => {
  return (
    <main className="grow p-6">
      {props.node.children.map((child) => {
        return <NodeFactory key={child.id} node={child} />
      })}
    </main>
  )
}
