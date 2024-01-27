import { FC } from 'react'

export type HeadingNode = {
  id: number
  type: 'heading'
  props: {
    text: string
  }
}

export const Heading: FC<{ node: HeadingNode }> = (props) => {
  return <h1 className="bg-cyan-100 p-3">{props.node.props.text}</h1>
}
