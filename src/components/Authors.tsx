import { FC } from 'react'

export type AuthorsNode = {
  id: number
  type: 'authors'
  props: {
    authors: Array<{ id: string; name: string }>
  }
}

export const Authors: FC<{ node: AuthorsNode }> = (props) => {
  return (
    <ul className="bg-slate-100 py-3">
      {props.node.props.authors.map((author) => {
        return <li key={author.id}>{author.name}</li>
      })}
    </ul>
  )
}
