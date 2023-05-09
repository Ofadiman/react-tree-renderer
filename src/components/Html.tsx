import { ReactNode } from 'react'
import { NodeType } from '../websiteMap.tsx'
import { Extension } from '../extension.ts'

export type HtmlNode = {
  id: string
  type: NodeType.Html
  props: {
    html: string
  }
  children: []
  meta: {}
}

type NodeArgs = {
  type: string
  html: string
}

export class HtmlExtension implements Extension<NodeArgs, HtmlNode> {
  node(args: NodeArgs): HtmlNode {
    return {
      id: Math.random().toString(),
      meta: {},
      type: NodeType.Html,
      props: {
        html: args.html,
      },
      children: [],
    }
  }

  render(node: HtmlNode): ReactNode {
    return (
      <div
        key={node.id}
        className={'p-5 bg-lime-400'}
        dangerouslySetInnerHTML={{ __html: node.props.html }}
      />
    )
  }
}
