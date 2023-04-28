import { FC } from 'react'

export const Placeholder: FC<{ id: string }> = (props) => {
  return <div className={'bg-zinc-900 text-white p-5'}>ad placeholder #{props.id}</div>
}
