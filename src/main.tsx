import './global.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { useApi } from './api/useApi.ts'
import { NodeFactory } from './components/NodeFactory.tsx'

// const urlSearchParams = new URLSearchParams(window.location.search)
// const device = urlSearchParams.get('layout') ?? 'desktop'
// const shouldRenderMap = urlSearchParams.get('map') === 'true'

const App = () => {
  const root = useApi()

  if (root === null) {
    return <p>Loading...</p>
  }

  return <NodeFactory node={root} />
}

// TODO: Handle rendering website map as JSON.
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
