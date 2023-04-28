import { FC } from 'react'

export const Dashboard: FC<{ items: Array<{ text: string }> }> = (props) => {
  return (
    <div className={'bg-lime-400 p-5'}>
      <p>this is dashboard rendered on a mobile device</p>
      <div className={'flex overflow-x-auto'}>
        {props.items.map((item: any) => {
          return (
            <div
              className={'p-5 min-w-[500px] mr-4 text-center last:mr-0 bg-purple-400'}
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
