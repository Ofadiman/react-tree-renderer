import { FC } from 'react'

export const Sources: FC<{ sources: Array<{ id: string; source: string }> }> = (props) => {
  if (props.sources.length === 0) {
    return null
  }

  const joined = props.sources.map((source) => source.source).join(', ')

  return <p className={'bg-lime-400 p-5'}>{joined}</p>
}
