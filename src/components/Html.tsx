import { FC } from 'react'

export const Html: FC<{ type: string; html: string }> = (props) => {
  return (
    <div
      style={{ backgroundColor: 'rgba(255, 255, 0, 0.5)', padding: 20 }}
      dangerouslySetInnerHTML={{ __html: props.html }}
    ></div>
  )
}
