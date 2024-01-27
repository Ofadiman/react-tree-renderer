import './global.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { useApi } from './api/useApi.ts'
import { NodeFactory } from './components/NodeFactory.tsx'

const App = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const shouldRenderMap = urlSearchParams.get('map') === 'true'
  const root = useApi()

  if (root === null) {
    return <p>Loading...</p>
  }

  if (shouldRenderMap === true) {
    return <pre>{JSON.stringify(root, null, 2)}</pre>
  }

  return <NodeFactory node={root} />
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
