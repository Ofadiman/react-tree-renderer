import { FC } from 'react'

export const Lead: FC<{ lead: string }> = (props) => {
  return <p className={'p-5 bg-lime-400'}>{props.lead}</p>
}
