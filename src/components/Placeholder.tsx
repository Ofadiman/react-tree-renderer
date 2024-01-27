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
  const placeholdersIds = usePlaceholdersContext()

  if (placeholdersIds.includes(props.node.id)) {
    return <p className="bg-red-300 p-3">{`Rendering placeholder`}</p>
  }

  return null
}
