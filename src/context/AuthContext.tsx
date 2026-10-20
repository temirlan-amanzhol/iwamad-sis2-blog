import { createContext, useContext, useState, type ReactNode } from 'react'

type AuthContextValue = {
  signedIn: boolean
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

type AuthProviderProps = {
  children: ReactNode
}

// "Signed in" is one boolean in React state – no password, no server.
// It resets on refresh; real authentication comes in Week 13
export function AuthProvider({ children }: AuthProviderProps) {
  const [signedIn, setSignedIn] = useState(false)

  return (
    <AuthContext.Provider
      value={{ signedIn, signIn: () => setSignedIn(true), signOut: () => setSignedIn(false) }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// oxlint-disable-next-line react/only-export-components
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === null) {
    throw new Error('useAuth must be used inside AuthProvider')
  }
  return context
}
