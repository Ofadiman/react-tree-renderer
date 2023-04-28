import './global.css'
import ReactDOM from 'react-dom/client'
import { mockResponse } from './mockResponse.ts'
import {
  fillWebsiteMapWithPlaceholders,
  getWebsiteMapForDesktop,
  getWebsiteMapForMobile,
  renderNode,
} from './websiteMap.tsx'
import { StrictMode } from 'react'
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

const urlSearchParams = new URLSearchParams(window.location.search)
const device = urlSearchParams.get('layout') ?? 'desktop'

let websiteMap
if (device === 'desktop') {
  websiteMap = getWebsiteMapForDesktop(mockResponse)
} else {
  websiteMap = getWebsiteMapForMobile(mockResponse)
}

fillWebsiteMapWithPlaceholders(websiteMap)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>{renderNode(websiteMap, placeholdersToRender)}</StrictMode>,
)
