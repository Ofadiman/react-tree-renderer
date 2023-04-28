import { FC } from 'react'

export const DashboardItem: FC<{ text: string }> = (props) => {
  return <div className={'p-5 bg-lime-400'}>{props.text}</div>
}
