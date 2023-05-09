import { ReactNode } from 'react'
import { NodeType } from '../websiteMap.tsx'
import { Extension } from '../extension.ts'

export type DashboardNode = {
  children: []
  type: NodeType.Dashboard
  meta: {}
  props: {
    items: Array<{ text: string }>
  }
  id: string
}

type NodeArgs = {
  type: string
  items: Array<{ text: string }>
}

export class DashboardExtension implements Extension<NodeArgs, DashboardNode> {
  node(element: NodeArgs): DashboardNode {
    return {
      props: {
        items: element.items,
      },
      id: 'dashboard',
      type: NodeType.Dashboard,
      meta: {},
      children: [],
    }
  }

  render(node: DashboardNode): ReactNode {
    return (
      <div key={node.id} className={'bg-lime-400 p-5'}>
        <p>this is dashboard rendered on a mobile device</p>
        <div className={'flex overflow-x-auto'}>
          {node.props.items.map((item: any) => {
            return (
              <div
                className={'p-5 min-w-[500px] mr-4 text-center last:mr-0 bg-purple-400'}
                key={item.text}
              >
                {item.text}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
