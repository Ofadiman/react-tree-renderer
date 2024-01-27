import { generateId } from './api/useApi'
import { ApplicationNode } from './components/NodeFactory'
import { PlaceholderNode } from './components/Placeholder'

export const fillWebsiteMapWithPlaceholders = (node: ApplicationNode) => {
  if (!('children' in node)) {
    return node
  }

  const desiredChildrenCount = node.children.length * 2 - 1
  const newChildren: ApplicationNode[] = []

  for (let i = 0; i < desiredChildrenCount; i++) {
    if (i % 2 === 0) {
      const child = node.children[i / 2]
      if ('children' in child) {
        fillWebsiteMapWithPlaceholders(child)
      }
      newChildren.push(child)
    } else {
      if (node.type === 'main-aside-wrapper') {
        continue
      }

      const id = generateId()
      const placeholder: PlaceholderNode = {
        id,
        type: 'placeholder',
        props: {
          id,
        },
      }

      newChildren.push(placeholder)
    }
  }

  // @ts-ignore
  node.children = newChildren
}
