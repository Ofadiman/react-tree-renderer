import { ReactNode } from 'react'
import { Extension } from '../extension.ts'
import { NodeType } from '../websiteMap.tsx'

type Author = {
  id: string
  name: string
}

export type AuthorsNode = {
  props: {
    authors: Author[]
  }
  meta: {
    length: number
  }
  children: []
  type: NodeType.Authors
  id: string
}

type AuthorsNodeArgs = {
  authors: Author[]
}

const join = (authors: Author[]) => {
  return authors.map((author) => author.name).join(', ')
}

export class AuthorsExtension implements Extension<AuthorsNodeArgs, AuthorsNode> {
  node(args: AuthorsNodeArgs): AuthorsNode {
    return {
      type: NodeType.Authors,
      meta: {
        length: join(args.authors).length,
      },
      props: {
        authors: args.authors,
      },
      children: [],
      id: 'authors',
    }
  }

  render(node: AuthorsNode): ReactNode {
    if (node.props.authors.length === 0) {
      return null
    }

    return (
      <p key={node.id} className={'bg-lime-400 p-5'}>
        {join(node.props.authors)}
      </p>
    )
  }
}
