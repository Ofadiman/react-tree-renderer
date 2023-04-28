import { FC } from 'react'

export const Teaser: FC<{ catchPhrase: string }> = (props) => {
  return <div className={'bg-emerald-400 p-5'}>Teaser: {props.catchPhrase}</div>
}
