import { FC } from 'react'

export const Placeholder: FC<{ id: string }> = (props) => {
  return (
    <div style={{ backgroundColor: 'rgba(255, 64, 0, 0.5)', padding: 20 }}>
      renders ad {props.id}
    </div>
  )
}
