import { FC } from 'react'
import { Main, MainNode } from './Main'
import { Header, HeaderNode } from './Header'
import { Footer, FooterNode } from './Footer'
import { MainAsideWrapper, MainAsideWrapperNode } from './MainAsideWrapper'
import { Aside, AsideNode } from './Aside'
import { Placeholder, PlaceholderNode } from './Placeholder'
import { Paragraph, ParagraphNode } from './Paragraph'
import { Root, RootNode } from './Root'
import { Html, HtmlNode } from './Html'
import { Authors, AuthorsNode } from './Authors'
import { Heading, HeadingNode } from './Heading'
import { Rectangle, RectangleNode } from './Rectangle'

export type ApplicationNode =
  | RootNode
  | MainNode
  | HeaderNode
  | FooterNode
  | MainAsideWrapperNode
  | AsideNode
  | PlaceholderNode
  | ParagraphNode
  | HtmlNode
  | AuthorsNode
  | HeadingNode
  | RectangleNode

export const NodeFactory: FC<{
  node: ApplicationNode
}> = (props) => {
  if (props.node.type === 'root') {
    return <Root node={props.node} />
  }

  if (props.node.type === 'header') {
    return <Header key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'main-aside-wrapper') {
    return <MainAsideWrapper key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'aside') {
    return <Aside key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'main') {
    return <Main key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'footer') {
    return <Footer key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'placeholder') {
    return <Placeholder key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'paragraph') {
    return <Paragraph key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'authors') {
    return <Authors key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'html') {
    return <Html key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'heading') {
    return <Heading key={props.node.id} node={props.node} />
  }

  if (props.node.type === 'rectangle') {
    return <Rectangle key={props.node.id} node={props.node} />
  }

  throw new Error(`unhandled node type ${props.node.type}`)
}
