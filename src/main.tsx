import './global.css'
import ReactDOM from 'react-dom/client'
import { mockResponse } from './mockResponse.ts'
import {
  fillWebsiteMapWithPlaceholders,
  getWebsiteMapForDesktop,
  renderNode,
} from './websiteMap.tsx'
import { FC, StrictMode, useMemo, useState } from 'react'
import { faker } from '@faker-js/faker'

faker.seed(1)

const placeholdersToRender = {
  1: {
    prop1: 'value1',
    prop2: 'value2',
  },
  2: {
    prop1: 'value1',
    prop2: 'value2',
  },
}

const Main: FC = () => {
  const [device, setDevice] = useState<'desktop' | 'mobile'>('desktop')
  const map = useMemo(() => {
    const json = getWebsiteMapForDesktop(mockResponse)
    fillWebsiteMapWithPlaceholders(json)
    return json
  }, [device])

  return (
    <>
      <menu
        style={{
          borderStyle: 'solid',
          borderWidth: 1,
          borderColor: 'black',
          padding: 20,
          position: 'fixed',
          top: '50%',
          right: 0,
          transform: 'translateY(-50%)',
        }}
      >
        <p>device: {device}</p>
        <button
          onClick={() => {
            setDevice((prevDevice) => {
              if (prevDevice === 'desktop') {
                return 'mobile'
              } else {
                return 'desktop'
              }
            })
          }}
        >
          toggle device
        </button>
      </menu>
      {renderNode(map, placeholdersToRender)}
    </>
  )
}
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <Main />
  </StrictMode>,
)
