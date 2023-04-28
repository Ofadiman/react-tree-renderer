import { ReactElement, ReactNode } from 'react'
import { Root } from './components/Root.tsx'
import { Main } from './components/Main.tsx'
import { Heading } from './components/Heading.tsx'
import { Html } from './components/Html.tsx'
import { Paragraph } from './components/Paragraph.tsx'
import { Aside } from './components/Aside.tsx'
import { Header } from './components/Header.tsx'
import { Navbar } from './components/Navbar.tsx'
import { Square } from './components/Square.tsx'
import { Placeholder } from './components/Placeholder.tsx'
import { MockResponse } from './mockResponse.ts'
import { ColumnsWrapper } from './components/ColumnsWrapper.tsx'
import { ContentWrapper } from './components/ContentWrapper.tsx'
import { Footer } from './components/Footer'

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
  Square = 'square',
  Footer = 'footer',
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
  [NodeType.Square]: Square,
  [NodeType.Placeholder]: Placeholder,
  [NodeType.ColumnsWrapper]: ColumnsWrapper,
  [NodeType.ContentWrapper]: ContentWrapper,
  [NodeType.Footer]: Footer,
}

export const renderNode = (node: Node, placeholdersToRender: Record<string, Object>): ReactNode => {
  const Component = componentMapping[node.type]

  if (!Component) {
    console.error(`Unknown component type: ${node.type}`)
    return null
  }

  if (node.type === NodeType.Placeholder && placeholdersToRender[node.id] === undefined) {
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
    children: [header, columnsWrapper],
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
    id: 'navbar',
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

  response.content.forEach((element, index) => {
    const node: Node = {
      props: element,
      children: [],
      meta: {},
      id: `content index: ${index}`,
      type: element.type,
    }

    main.children.push(node)
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
