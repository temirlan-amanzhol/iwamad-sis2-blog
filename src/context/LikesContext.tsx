import { createContext, useContext, useState, type ReactNode } from 'react'

type LikesContextValue = {
  likedIds: number[]
  isLiked: (postId: number) => boolean
  toggleLike: (postId: number) => void
}

const LikesContext = createContext<LikesContextValue | null>(null)

type LikesProviderProps = {
  children: ReactNode
}

// Likes live above the routes, so a post stays liked when you go from the list to the
// post page and back. Each post has its own value: its id is in the array or it is not
export function LikesProvider({ children }: LikesProviderProps) {
  const [likedIds, setLikedIds] = useState<number[]>([])

  function isLiked(postId: number) {
    return likedIds.includes(postId)
  }

  function toggleLike(postId: number) {
    setLikedIds((current) =>
      current.includes(postId) ? current.filter((id) => id !== postId) : [...current, postId],
    )
  }

  return (
    <LikesContext.Provider value={{ likedIds, isLiked, toggleLike }}>
      {children}
    </LikesContext.Provider>
  )
}

// The hook lives next to the provider, so the fast-refresh rule is turned off for it
// oxlint-disable-next-line react/only-export-components
export function useLikes() {
  const context = useContext(LikesContext)
  if (context === null) {
    throw new Error('useLikes must be used inside LikesProvider')
  }
  return context
}
