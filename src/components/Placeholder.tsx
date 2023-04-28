import { FC } from 'react'
import { usePlaceholdersContext } from '../context/Placeholders.context.tsx'

export const Placeholder: FC<{ id: string }> = (props) => {
  const placeholdersContext = usePlaceholdersContext()

  if (placeholdersContext[props.id] !== undefined) {
    return <div className={'bg-red-400 text-white p-5'}>ad placeholder #{props.id}</div>
  }

  return <div className={'bg-zinc-900 text-white p-5'}>ad placeholder #{props.id}</div>
}
