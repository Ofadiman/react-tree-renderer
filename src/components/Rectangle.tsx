import { FC } from 'react'

export const Rectangle: FC<{ text: string }> = (props) => {
  return <div className={'p-5 bg-indigo-400'}>{props.text}</div>
}
