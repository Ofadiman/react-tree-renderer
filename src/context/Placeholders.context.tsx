import { createContext, useContext } from 'react'

export const PlaceholdersContext = createContext<{
  placeholderIds: number[]
  shouldRenderAllPlaceholders: boolean
} | null>(null)

export const usePlaceholdersContext = () => {
  const context = useContext(PlaceholdersContext)

  if (context === null) {
    throw new Error('placeholders context is null')
  }

  return context
}
