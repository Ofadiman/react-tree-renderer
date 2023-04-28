import './global.css'
import ReactDOM from 'react-dom/client'
import { mockResponse } from './mockResponse.ts'
import { fillWebsiteMapWithPlaceholders, getWebsiteMapForDesktop, renderNode } from './websiteMap.tsx'
import { StrictMode } from 'react'

const json = getWebsiteMapForDesktop(mockResponse)
console.log('json', json)
fillWebsiteMapWithPlaceholders(json)
console.log('map', json)

const placeholdersToRender = {
  1: {
    prop1: 'value1',
    prop2: 'value2',
  },
  5: {
    prop1: 'value1',
    prop2: 'value2',
  },
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>{renderNode(json, placeholdersToRender)}</StrictMode>,
)
