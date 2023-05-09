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
import { PlaceholdersContext } from './context/Placeholders.context.tsx'

faker.seed(1)

const urlSearchParams = new URLSearchParams(window.location.search)
const device = urlSearchParams.get('layout') ?? 'desktop'
const shouldRenderMap = urlSearchParams.get('map') === 'true'

let websiteMap
if (device === 'desktop') {
  websiteMap = getWebsiteMapForDesktop(apiResponse)
} else {
  websiteMap = getWebsiteMapForMobile(apiResponse)
}

fillWebsiteMapWithPlaceholders(websiteMap, device)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {shouldRenderMap ? (
      <pre>{JSON.stringify(websiteMap, null, 2)}</pre>
    ) : (
      <PlaceholdersContext.Provider value={placeholdersToRender}>
        {renderNode(websiteMap)}
      </PlaceholdersContext.Provider>
    )}
  </StrictMode>,
)
