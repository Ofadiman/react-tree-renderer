import { ReactNode } from 'react'
import { RootExtension } from './components/Root.tsx'
import { MainExtension } from './components/Main.tsx'
import { HeadingExtension } from './components/Heading.tsx'
import { HtmlExtension } from './components/Html.tsx'
import { ParagraphExtension } from './components/Paragraph.tsx'
import { AsideExtension } from './components/Aside.tsx'
import { HeaderExtension } from './components/Header.tsx'
import { NavbarExtension } from './components/Navbar.tsx'
import { RectangleExtension } from './components/Rectangle.tsx'
import { PlaceholderExtension } from './components/Placeholder.tsx'
import { MockResponse } from './mocks/apiResponse.ts'
import { ColumnsWrapperExtension } from './components/ColumnsWrapper.tsx'
import { ContentWrapperExtension } from './components/ContentWrapper.tsx'
import { FooterExtension } from './components/Footer'
import { AuthorsExtension } from './components/Authors'
import { SourcesExtension } from './components/Sources'
import { LeadExtension } from './components/Lead'
import { DashboardExtension } from './components/Dashboard'
import { DashboardItemExtension } from './components/DashboardItem'
import { TeaserExtension } from './components/Teaser.tsx'
import { Extension } from './extension.ts'

export enum NodeType {
  ContentWrapper = 'content-wrapper',
  ColumnsWrapper = 'columns-wrapper',
  Placeholder = 'placeholder',
  Root = 'root',
  Navbar = 'navbar',
  Header = 'header',
  Main = 'main',
  Aside = 'aside',
  Heading = 'heading',
  Paragraph = 'paragraph',
  Html = 'html',
  Rectangle = 'rectangle',
  Footer = 'footer',
  Authors = 'authors',
  Sources = 'sources',
  Lead = 'lead',
  Dashboard = 'dashboard',
  DashboardItem = 'dashboard-item',
  Teaser = 'teaser',
}

export type Node = {
  id: string
  type: NodeType
  meta: Object
  children: Node[]
  props: Object
}

export const extensionMapping = {
  [NodeType.Aside]: new AsideExtension(),
  [NodeType.Authors]: new AuthorsExtension(),
  [NodeType.ColumnsWrapper]: new ColumnsWrapperExtension(),
  [NodeType.ContentWrapper]: new ContentWrapperExtension(),
  [NodeType.DashboardItem]: new DashboardItemExtension(),
  [NodeType.Dashboard]: new DashboardExtension(),
  [NodeType.Footer]: new FooterExtension(),
  [NodeType.Header]: new HeaderExtension(),
  [NodeType.Heading]: new HeadingExtension(),
  [NodeType.Html]: new HtmlExtension(),
  [NodeType.Lead]: new LeadExtension(),
  [NodeType.Main]: new MainExtension(),
  [NodeType.Navbar]: new NavbarExtension(),
  [NodeType.Paragraph]: new ParagraphExtension(),
  [NodeType.Placeholder]: new PlaceholderExtension(),
  [NodeType.Rectangle]: new RectangleExtension(),
  [NodeType.Root]: new RootExtension(),
  [NodeType.Sources]: new SourcesExtension(),
  [NodeType.Teaser]: new TeaserExtension(),
} satisfies Record<NodeType, Extension<any, any>>

export const renderNode = (node: Node): ReactNode => {
  const extension = extensionMapping[node.type]

  if (!extension) {
    console.error(`extension for node with type ${node.type} not found.`)
    return null
  }

  if (node.children.length > 0) {
    const children = node.children.map((childNode: any) => renderNode(childNode))

    // TODO: improve type safety here
    return extension.render(node as any, children)
  }

  // TODO: improve type safety here
  return extension.render(node as any, [])
}

let current = 0
export const generateId = () => {
  const id = current
  current++
  return id.toString()
}

export const fillWebsiteMapWithPlaceholders = (node: Node, device: string) => {
  if (node.type === NodeType.ColumnsWrapper && device === 'desktop') {
    const newChildren: Node[] = []

    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i]
      if (child.children.length > 0) {
        fillWebsiteMapWithPlaceholders(child, device)
      }
      newChildren.push(child)
    }

    node.children = newChildren

    return
  }

  const desiredChildrenCount = node.children.length * 2 - 1
  const newChildren: Node[] = []

  for (let i = 0; i < desiredChildrenCount; i++) {
    if (i % 2 === 0) {
      const child = node.children[i / 2]
      if (child.children.length > 0) {
        fillWebsiteMapWithPlaceholders(child, device)
      }
      newChildren.push(child)
    } else {
      const id = generateId()
      const placeholder: Node = {
        children: [],
        meta: {},
        id,
        type: NodeType.Placeholder,
        props: {
          id,
        },
      }

      newChildren.push(placeholder)
    }
  }

  node.children = newChildren
}

export const getWebsiteMapForDesktop = (response: MockResponse) => {
  const main = extensionMapping[NodeType.Main].node()
  const aside = extensionMapping[NodeType.Aside].node()
  const columnsWrapper = extensionMapping[NodeType.ColumnsWrapper].node({ children: [main, aside] })
  const header = extensionMapping[NodeType.Header].node(response.mainMedia)
  const contentWrapper = extensionMapping[NodeType.ContentWrapper].node({
    children: [
      extensionMapping[NodeType.Lead].node({
        text: response.lead,
      }),
      header,
      columnsWrapper,
    ],
  })
  const navbar = extensionMapping[NodeType.Navbar].node()
  const footer = extensionMapping[NodeType.Footer].node({ links: response.footerLinks })
  const root = extensionMapping[NodeType.Root].node({ children: [navbar, contentWrapper, footer] })

  response.content.forEach((element, index) => {
    if (element.type === NodeType.Teaser) {
      return
    }

    if (element.type === NodeType.Dashboard) {
      element.items?.forEach((item, itemIndex) => {
        const node: Node = {
          props: {
            text: item.text,
          },
          children: [],
          meta: {},
          id: `content index: ${index} ${itemIndex}`,
          type: NodeType.DashboardItem,
        }

        main.children.push(node)
      })

      return
    }

    const extension = extensionMapping[element.type]
    if (!extension) {
      console.log(`extension for element with type: ${element.type} not found in extensions map`)
      return
    }

    // TODO: improve type safety here
    const node = extension.node(element as any)

    main.children.push(node)
  })

  main.children.push(extensionMapping[NodeType.Authors].node({ authors: response.authors }))
  main.children.push(extensionMapping[NodeType.Sources].node({ sources: response.sources }))

  response.aside.forEach((element) => {
    const extension = extensionMapping[element.type]
    if (!extension) {
      console.log(`extension for element with type: ${element.type} not found in extensions map`)
      return
    }

    // TODO: improve type safety here
    const node = extension.node(element as any)

    aside.children.push(node)
  })

  return root
}

export const getWebsiteMapForMobile = (response: MockResponse) => {
  const main: Node = {
    children: [],
    meta: {},
    id: 'main',
    type: NodeType.Main,
    props: {},
  }

  const aside: Node = {
    children: [],
    meta: {},
    id: 'aside',
    type: NodeType.Aside,
    props: {},
  }

  const header: Node = {
    children: [],
    meta: {},
    id: 'header',
    type: NodeType.Header,
    props: response.mainMedia,
  }

  const contentWrapper: Node = {
    children: [],
    meta: {},
    id: 'content-wrapper',
    type: NodeType.ContentWrapper,
    props: {},
  }

  const navbar: Node = {
    children: [],
    meta: {},
    id: 'navbar',
    type: NodeType.Navbar,
    props: {},
  }

  const footer: Node = {
    children: [],
    meta: {},
    id: 'footer',
    type: NodeType.Footer,
    props: {
      links: response.footerLinks,
    },
  }

  const root: Node = {
    children: [navbar, contentWrapper, footer],
    meta: {},
    id: 'root',
    type: NodeType.Root,
    props: {},
  }

  contentWrapper.children.push(
    {
      props: {
        lead: response.lead,
      },
      children: [],
      meta: {},
      id: `lead`,
      type: NodeType.Lead,
    },
    header,
    main,
    aside,
  )

  response.content.forEach((element, index) => {
    if (element.type === NodeType.Dashboard) {
      const node: Node = {
        props: element,
        children: [],
        meta: {},
        id: `content index: ${index}`,
        type: NodeType.Dashboard,
      }

      main.children.push(node)
      return
    }

    const node: Node = {
      props: element,
      children: [],
      meta: {},
      id: `content index: ${index}`,
      type: element.type,
    }

    main.children.push(node)
  })

  main.children.push({
    props: {
      authors: response.authors,
    },
    children: [],
    meta: {},
    id: `authors`,
    type: NodeType.Authors,
  })

  main.children.push({
    props: {
      sources: response.sources,
    },
    children: [],
    meta: {},
    id: `sources`,
    type: NodeType.Sources,
  })

  response.aside.forEach((element, index) => {
    const node: Node = {
      props: element,
      children: [],
      meta: {},
      id: `content index: ${index}`,
      type: element.type,
    }

    aside.children.push(node)
  })

  return root
}
