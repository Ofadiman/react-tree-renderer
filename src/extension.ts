import { ReactNode } from 'react'

export type Extension<Args, Node extends { props: Object }> = {
  node: (args: Args) => Node
  render: (node: Node, children?: ReactNode) => ReactNode
}
