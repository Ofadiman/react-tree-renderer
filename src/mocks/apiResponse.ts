import { NodeType } from '../websiteMap.tsx'

export const apiResponse = {
  lead: 'lead',
  content: [
    {
      type: NodeType.Heading,
      content: 'First heading',
    },
    {
      type: NodeType.Paragraph,
      lines: 'First paragraph',
    },
    {
      type: NodeType.Html,
      html: '<div>renders html</div>',
    },
    {
      type: NodeType.Paragraph,
      lines: 'Second paragraph',
    },
    {
      type: NodeType.Dashboard,
      items: [
        {
          text: 'First dashboard element',
        },
        {
          text: 'Second dashboard element',
        },
        {
          text: 'Third dashboard element',
        },
        {
          text: 'Fourth dashboard element',
        },
        {
          text: 'Fifth dashboard element',
        },
      ],
    },
    {
      type: NodeType.Paragraph,
      lines: 'Third paragraph',
    },
  ],
  aside: [
    {
      type: NodeType.Rectangle,
      text: 'First rectangle',
    },
    {
      type: NodeType.Rectangle,
      text: 'Second rectangle',
    },
    {
      type: NodeType.Rectangle,
      text: 'Third rectangle',
    },
  ],
  mainMedia: {
    title: 'title: Place the meatballs in a frying pan, and jumble equally with dark bagel lassi.',
    description: 'description: Try fluffing herring pilaf covered with peppermint tea.',
    source:
      'source: Season the meatloaf with hot rum, vegemite, mustard, and anise making sure to cover all of it.',
  },
  authors: [
    {
      id: 'c80bb8b7-1273-42de-87be-63a435989452',
      name: 'First author',
    },
    {
      id: 'd408a207-5043-430e-93c5-83cd6fa4e764',
      name: 'Second author',
    },
  ],
  sources: [
    {
      id: 'dec8b9c5-337b-437f-a714-98da7b36a613',
      source: 'First source',
    },
    {
      id: 'f446d54f-bba8-436f-940c-dec5f67fd7d8',
      source: 'Second source',
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

export type MockResponse = typeof apiResponse
