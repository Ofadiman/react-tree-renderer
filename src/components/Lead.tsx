import { FC } from 'react'

export const Lead: FC<{ lead: string }> = (props) => {
  return <p style={{ padding: 20, backgroundColor: 'rgba(255, 125, 33, 0.5)' }}>{props.lead}</p>
}
