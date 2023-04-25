import { FC } from 'react'

export const Square: FC<{ type: string; color: string }> = (props) => {
  return <div style={{ width: 50, height: 50, backgroundColor: props.color }}>square</div>
}
