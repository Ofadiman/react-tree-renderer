import './global.css'
import ReactDOM from 'react-dom/client'
import { StrictMode } from 'react'
import { useApi } from './api/useApi.ts'
import { NodeFactory } from './components/NodeFactory.tsx'
import { PlaceholdersContext } from './context/Placeholders.context.tsx'

const App = () => {
  const urlSearchParams = new URLSearchParams(window.location.search)
  const shouldRenderMap = urlSearchParams.get('map') === 'true'
  const shouldRenderAllPlaceholders = urlSearchParams.get('placeholders') === 'true'
  const { root } = useApi()

  if (root === null) {
    return <p>Loading...</p>
  }

  if (shouldRenderMap === true) {
    return <pre>{JSON.stringify(root, null, 2)}</pre>
  }

  return (
    <PlaceholdersContext.Provider
      value={{ placeholderIds: [40, 42, 45, 47], shouldRenderAllPlaceholders }}
    >
      <NodeFactory node={root} />
    </PlaceholdersContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
