import { FC } from 'react'

export type RectangleNode = {
  id: number
  type: 'rectangle'
  props: {
    height: number
    text: string
  }
}

export const Rectangle: FC<{ node: RectangleNode }> = (props) => {
  return (
    <div
      style={{ height: props.node.props.height }}
      className="bg-teal-100 flex items-center justify-center"
    >
      {props.node.props.text}
    </div>
  )
}
