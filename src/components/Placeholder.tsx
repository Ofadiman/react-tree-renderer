import { FC } from 'react'

export type PlaceholderNode = {
  id: number
  type: 'placeholder'
  props: {
    id: number
  }
}

export const Placeholder: FC<{ node: PlaceholderNode }> = (props) => {
  return <pre className="bg-red-300">{JSON.stringify(props.node, null, 2)}</pre>
}
