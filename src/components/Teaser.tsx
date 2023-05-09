import { ReactNode } from 'react'
import { NodeType } from '../websiteMap.tsx'
import { Extension } from '../extension.ts'

export type NodeArgs = {
  catchPhrase: string
}

export type TeaserNode = {
  id: string
  type: NodeType.Teaser
  props: {
    catchPhrase: string
  }
  meta: {
    length: number
  }
  children: []
}

export class TeaserExtension implements Extension<NodeArgs, TeaserNode> {
  node(args: NodeArgs): TeaserNode {
    return {
      children: [],
      type: NodeType.Teaser,
      meta: {
        length: args.catchPhrase.length,
      },
      props: {
        catchPhrase: args.catchPhrase,
      },
      id: Math.random().toString(),
    }
  }

  render(node: TeaserNode): ReactNode {
    return (
      <div key={node.id} className={'bg-emerald-400 p-5'}>
        Teaser: {node.props.catchPhrase}
      </div>
    )
  }
}
