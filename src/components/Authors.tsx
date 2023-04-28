import { FC } from 'react'

export const Authors: FC<{ authors: Array<{ id: string; name: string }> }> = (props) => {
  if (props.authors.length === 0) {
    return null
  }

  const joined = props.authors.map((author) => author.name).join(', ')

  return <p className={'bg-lime-400 p-5'}>{joined}</p>
}
