import React from 'react'
import ReactDOM from 'react-dom/client'

const response = {
  lead: 'lead',
  content: [
    {
      type: 'heading',
      content: 'first heading',
    },
    {
      type: 'paragraph',
      lines: 'first paragraph',
    },
    {
      type: 'html',
      html: '<div>renders html</div>',
    },
  ],
  aside: [],
  mainMedia: {
    title: 'main media title',
    description: 'main media description',
    source: 'main media source',
  },
  authors: [
    {
      id: 'c80bb8b7-1273-42de-87be-63a435989452',
      name: 'first author',
    },
    {
      id: 'd408a207-5043-430e-93c5-83cd6fa4e764',
      name: 'second author',
    },
  ],
  sources: [
    {
      id: 'dec8b9c5-337b-437f-a714-98da7b36a613',
      source: 'first source',
    },
    {
      id: 'f446d54f-bba8-436f-940c-dec5f67fd7d8',
      source: 'second source',
    },
  ],
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <div>renders div</div>
  </React.StrictMode>,
)
