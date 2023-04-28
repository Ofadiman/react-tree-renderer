import './global.css'
import ReactDOM from 'react-dom/client'
import { apiResponse } from './mocks/apiResponse.ts'
import {
  fillWebsiteMapWithPlaceholders,
  getWebsiteMapForDesktop,
  getWebsiteMapForMobile,
  renderNode,
} from './websiteMap.tsx'
import { StrictMode } from 'react'
import { faker } from '@faker-js/faker'
import { placeholdersToRender } from './mocks/placeholdersToRender.ts'

faker.seed(1)

const urlSearchParams = new URLSearchParams(window.location.search)
const device = urlSearchParams.get('layout') ?? 'desktop'

let websiteMap
if (device === 'desktop') {
  websiteMap = getWebsiteMapForDesktop(apiResponse)
} else {
  websiteMap = getWebsiteMapForMobile(apiResponse)
}

fillWebsiteMapWithPlaceholders(websiteMap)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>{renderNode(websiteMap, placeholdersToRender)}</StrictMode>,
)
