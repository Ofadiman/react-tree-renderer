import { ReactElement, ReactNode } from 'react'
import { Root } from './components/Root.tsx'
import { Main } from './components/Main.tsx'
import { Heading } from './components/Heading.tsx'
import { Html } from './components/Html.tsx'
import { Paragraph } from './components/Paragraph.tsx'
import { Aside } from './components/Aside.tsx'
import { Header } from './components/Header.tsx'
import { Navbar } from './components/Navbar.tsx'
import { Rectangle } from './components/Rectangle.tsx'
import { Placeholder } from './components/Placeholder.tsx'
import { MockResponse } from './mocks/apiResponse.ts'
import { ColumnsWrapper } from './components/ColumnsWrapper.tsx'
import { ContentWrapper } from './components/ContentWrapper.tsx'
import { Footer } from './components/Footer'
import { Authors } from './components/Authors'
import { Sources } from './components/Sources'
import { Lead } from './components/Lead'
import { Dashboard } from './components/Dashboard'
import { DashboardItem } from './components/DashboardItem'

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
}

export type Node = {
  id: string
  type: NodeType
  meta: Object
  children: Node[]
  props: Object
}

const componentMapping: Record<NodeType, (props: any) => ReactElement | null> = {
  [NodeType.Root]: Root,
  [NodeType.Main]: Main,
  [NodeType.Heading]: Heading,
  [NodeType.Html]: Html,
  [NodeType.Paragraph]: Paragraph,
  [NodeType.Aside]: Aside,
  [NodeType.Header]: Header,
  [NodeType.Navbar]: Navbar,
  [NodeType.Rectangle]: Rectangle,
  [NodeType.Placeholder]: Placeholder,
  [NodeType.ColumnsWrapper]: ColumnsWrapper,
  [NodeType.ContentWrapper]: ContentWrapper,
  [NodeType.Footer]: Footer,
  [NodeType.Authors]: Authors,
  [NodeType.Sources]: Sources,
  [NodeType.Lead]: Lead,
  [NodeType.Dashboard]: Dashboard,
  [NodeType.DashboardItem]: DashboardItem,
}

export const renderNode = (node: Node, placeholdersToRender: Record<string, Object>): ReactNode => {
  const Component = componentMapping[node.type]

  if (!Component) {
    console.error(`Unknown component type: ${node.type}`)
    return null
  }

  if (node.children.length > 0) {
    const children = node.children.map((childNode: any) =>
      renderNode(childNode, placeholdersToRender),
    )
    return (
      <Component {...node.props} key={node.id}>
        {children}
      </Component>
    )
  }

  return <Component {...node.props} key={node.id} />
}

let current = 0
export const generateId = () => {
  const id = current
  current++
  return id.toString()
}

export const fillWebsiteMapWithPlaceholders = (node: Node) => {
  const desiredChildrenCount = node.children.length * 2 - 1
  const newChildren: Node[] = []

  for (let i = 0; i < desiredChildrenCount; i++) {
    if (i % 2 === 0) {
      const child = node.children[i / 2]
      if (child.children.length > 0) {
        fillWebsiteMapWithPlaceholders(child)
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

  const columnsWrapper: Node = {
    children: [main, aside],
    meta: {},
    id: 'columns-wrapper',
    type: NodeType.ColumnsWrapper,
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
    columnsWrapper,
  )

  response.content.forEach((element, index) => {
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
