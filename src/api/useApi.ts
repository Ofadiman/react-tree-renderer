import { useEffect, useState } from 'react'
import { RootNode } from '../components/Root'
import { HeaderNode } from '../components/Header'
import { MainAsideWrapperNode } from '../components/MainAsideWrapper'
import { FooterNode } from '../components/Footer'
import { AsideNode } from '../components/Aside'
import { MainNode } from '../components/Main'
import { fillWebsiteMapWithPlaceholders } from '../websiteMap'

let current = 0
export const generateId = (): number => {
  const id = current
  current++
  return id
}

const getContent = async () => {
  return {
    header: 'Very important text',
    menu: [
      {
        text: 'google',
        to: 'https://google.com',
      },
      {
        text: 'facebook',
        to: 'https://facebook.com',
      },
      {
        text: 'instagram',
        to: 'https://instagram.com',
      },
    ],
    content: [
      {
        type: 'heading',
        content: 'First heading',
      },
      {
        type: 'paragraph',
        lines: 'First paragraph',
      },
      {
        type: 'html',
        html: '<div>renders html</div>',
      },
      {
        type: 'paragraph',
        lines: 'Second paragraph',
      },
      {
        type: 'paragraph',
        lines: 'Third paragraph',
      },
    ],
    aside: [
      {
        height: 100,
        text: 'First rectangle',
      },
      {
        height: 200,
        text: 'Second rectangle',
      },
      {
        height: 100,
        text: 'Third rectangle',
      },
    ],
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
}

const waitFor = (milliseconds: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds)
  })
}

export const useApi = () => {
  const [state, setState] = useState<RootNode | null>(null)

  useEffect(() => {
    void (async () => {
      await waitFor(500)
      const content = await getContent()

      const header: HeaderNode = {
        id: generateId(),
        type: 'header',
        meta: {
          height: 50,
        },
        props: {
          links: [],
        },
      }

      const main: MainNode = {
        id: generateId(),
        type: 'main',
        children: [],
      }

      const aside: AsideNode = {
        id: generateId(),
        type: 'aside',
        children: [],
      }

      const mainAsideWrapper: MainAsideWrapperNode = {
        id: generateId(),
        type: 'main-aside-wrapper',
        children: [aside, main],
      }

      const footer: FooterNode = {
        id: generateId(),
        type: 'footer',
        meta: {
          height: 100,
        },
        props: {
          links: [],
        },
      }

      const root: RootNode = {
        id: generateId(),
        type: 'root',
        children: [header, mainAsideWrapper, footer],
      }

      content.menu.forEach((link) => {
        header.props.links.push(link)
      })

      content.aside.forEach((element) => {
        aside.children.push({
          type: 'rectangle',
          id: generateId(),
          props: element,
        })
      })

      main.children.push({
        id: generateId(),
        type: 'heading',
        props: {
          text: content.header,
        },
      })

      content.content.forEach((element) => {
        if (element.type === 'paragraph') {
          main.children.push({
            id: generateId(),
            type: 'paragraph',
            props: {
              text: element.lines!,
            },
          })
        }

        if (element.type === 'html') {
          main.children.push({
            id: generateId(),
            type: 'html',
            props: {
              html: element.html!,
            },
          })
        }
      })

      main.children.push({
        id: generateId(),
        type: 'authors',
        props: {
          authors: content.authors,
        },
      })

      content.footerLinks.forEach((link) => {
        footer.props.links.push(link)
      })

      fillWebsiteMapWithPlaceholders(root)

      setState(root)
    })()
  }, [])

  return { root: state }
}
