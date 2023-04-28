import { FC } from 'react'

export const Header: FC<{ title: string; description: string; source: string }> = (props) => {
  return (
    <header
      className={'bg-emerald-400 p-5 aspect-video flex items-center justify-center gap-4 flex-col'}
    >
      <p>{props.title}</p>
      <p>{props.description}</p>
      <p>{props.source}</p>
    </header>
  )
}
