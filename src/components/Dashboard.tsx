import { FC } from 'react'
import { faker } from '@faker-js/faker'

export const Dashboard: FC<{ items: Array<{ text: string }> }> = (props) => {
  console.log(props)
  return (
    <div
      style={{
        backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
        padding: 20,
      }}
    >
      <p>this is dashboard rendered on a mobile device</p>
      <div style={{ display: 'flex', overflowX: 'auto', padding: 20 }}>
        {props.items.map((item: any) => {
          return (
            <div
              style={{
                padding: 20,
                minWidth: 500,
                backgroundColor: faker.color.rgb({ format: 'css', includeAlpha: true }),
              }}
              key={item.text}
            >
              {item.text}
            </div>
          )
        })}
      </div>
    </div>
  )
}
