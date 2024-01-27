import { FC } from 'react'

export type ParagraphNode = {
  id: number
  type: 'paragraph'
  props: {
    text: string
  }
}

export const Paragraph: FC<{ node: ParagraphNode }> = (props) => {
  return <p className="bg-orange-100 py-5">{props.node.props.text}</p>
}
