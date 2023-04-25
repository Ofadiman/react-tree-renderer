import { FC, PropsWithChildren } from 'react'

export const ContentWrapper: FC<PropsWithChildren> = (props) => {
  return <div style={{ maxWidth: 768, padding: '0 20', margin: '0 auto' }}>{props.children}</div>
}
