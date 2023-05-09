import { FC, ReactNode } from 'react'
import { usePlaceholdersContext } from '../context/Placeholders.context.tsx'
import { generateId, NodeType } from '../websiteMap.tsx'
import { Extension } from '../extension.ts'

export const Placeholder: FC<{ id: string }> = (props) => {
  const placeholdersContext = usePlaceholdersContext()

  if (placeholdersContext[props.id] !== undefined) {
    return (
      <div key={props.id} className={'bg-red-400 text-white p-5'}>
        ad placeholder #{props.id}
      </div>
    )
  }

  return (
    <div key={props.id} className={'bg-zinc-900 text-white p-5'}>
      ad placeholder #{props.id}
    </div>
  )
}

export type PlaceholderNode = {
  id: string
  type: NodeType.Placeholder
  props: {
    id: string
  }
  meta: {}
  children: []
}

export class PlaceholderExtension implements Extension<void, PlaceholderNode> {
  node(): PlaceholderNode {
    const id = generateId()
    return {
      children: [],
      meta: {},
      id,
      type: NodeType.Placeholder,
      props: {
        id,
      },
    }
  }

  render(node: PlaceholderNode): ReactNode {
    return <Placeholder key={node.id} id={node.props.id} />
  }
}
