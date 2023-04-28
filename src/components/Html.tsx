import { FC } from 'react'

export const Html: FC<{ type: string; html: string }> = (props) => {
  return <div className={'p-5 bg-lime-400'} dangerouslySetInnerHTML={{ __html: props.html }}></div>
}
