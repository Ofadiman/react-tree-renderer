import { ReactNode } from 'react'
import { NodeType } from '../websiteMap.tsx'
import { Extension } from '../extension.ts'

type NodeArgs = {
  sources: Array<{ id: string; source: string }>
}

export type SourcesNode = {
  id: string
  type: NodeType.Sources
  meta: {
    length: number
  }
  props: {
    sources: Array<{ id: string; source: string }>
  }
  children: []
}

const join = (sources: Array<{ id: string; source: string }>) => {
  return sources.map((source) => source.source).join(', ')
}

export class SourcesExtension implements Extension<NodeArgs, SourcesNode> {
  node(args: NodeArgs): SourcesNode {
    return {
      id: Math.random().toString(),
      type: NodeType.Sources,
      meta: {
        length: join(args.sources).length,
      },
      children: [],
      props: {
        sources: args.sources,
      },
    }
  }

  render(node: SourcesNode): ReactNode {
    if (node.props.sources.length === 0) {
      return null
    }

    const joined = node.props.sources.map((source) => source.source).join(', ')

    return (
      <p key={node.id} className={'bg-lime-400 p-5'}>
        {joined}
      </p>
    )
  }
}
