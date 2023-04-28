import { NodeType } from './websiteMap.tsx'

export const mockResponse = {
  lead: 'lead',
  content: [
    {
      type: NodeType.Heading,
      content: 'first heading',
    },
    {
      type: NodeType.Paragraph,
      lines: 'first paragraph',
    },
    {
      type: NodeType.Html,
      html: '<div>renders html</div>',
    },
  ],
  aside: [
    {
      type: NodeType.Rectangle,
      text: 'A falsis, silva mirabilis historia.',
    },
    {
      type: NodeType.Rectangle,
      text: 'Poeta magnum parma est.',
    },
    {
      type: NodeType.Rectangle,
      text: 'Nunquam examinare armarium.',
    },
  ],
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
  footerLinks: [
    {
      text: 'facebook',
      to: 'https://www.facebook.com/',
    },
    {
      text: 'youtube',
      to: 'https://www.youtube.com/',
    },
    {
      text: 'instagram',
      to: 'https://www.instagram.com/',
    },
  ],
}

export type MockResponse = typeof mockResponse
