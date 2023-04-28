import { FC } from 'react'

export const Placeholder: FC<{ id: string }> = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'black',
        padding: 20,
        color: 'white',
      }}
    >
      renders ad placeholder #{props.id}
    </div>
  )
}
