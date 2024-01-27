import { FC } from 'react'
import { usePlaceholdersContext } from '../context/Placeholders.context'

export type PlaceholderNode = {
  id: number
  type: 'placeholder'
  props: {
    id: number
  }
}

export const Placeholder: FC<{ node: PlaceholderNode }> = (props) => {
  const context = usePlaceholdersContext()

  if (context.shouldRenderAllPlaceholders) {
    return <pre className="bg-red-300 p-3">{JSON.stringify(props.node, null, 2)}</pre>
  }

  if (context.placeholderIds.includes(props.node.id)) {
    return <p className="bg-red-300 p-3">{`Rendering placeholder`}</p>
  }

  return null
}
