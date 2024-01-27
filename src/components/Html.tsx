import { FC } from 'react'

export type HtmlNode = {
  id: number
  type: 'html'
  props: {
    html: string
  }
}

export const Html: FC<{ node: HtmlNode }> = (props) => {
  return (
    <div
      className="bg-lime-100 py-5"
      dangerouslySetInnerHTML={{ __html: props.node.props.html }}
    ></div>
  )
}
