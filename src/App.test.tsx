import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { expect, test } from 'vitest'
import App from './App.tsx'

// MemoryRouter lets a test start at any URL, without a browser address bar
function renderAt(path: string) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

test('the protected page shows sign-in when signed out, and opens after signing in', async () => {
  const user = userEvent.setup()
  renderAt('/favorites')

  expect(screen.getByRole('heading', { level: 1, name: 'Sign in' })).toBeInTheDocument()
  expect(screen.queryByRole('heading', { name: 'Your favorites' })).not.toBeInTheDocument()

  // The Sign in button on the page (the Header has a Sign in link, not a button)
  await user.click(screen.getByRole('button', { name: 'Sign in' }))
  expect(screen.getByRole('heading', { level: 1, name: 'Your favorites' })).toBeInTheDocument()

  // After signing out the page is protected again
  await user.click(screen.getByRole('button', { name: 'Sign out' }))
  expect(screen.getByRole('heading', { level: 1, name: 'Sign in' })).toBeInTheDocument()
})

test('an unknown URL shows the 404 page inside the layout', () => {
  renderAt('/banana')

  expect(screen.getByRole('heading', { name: /page not found/i })).toBeInTheDocument()
  expect(screen.getByRole('navigation', { name: 'Main' })).toBeInTheDocument()
})

test('a post id that does not exist shows a clear message', () => {
  renderAt('/posts/999')

  expect(screen.getByRole('heading', { name: 'Post not found' })).toBeInTheDocument()
  expect(screen.getByRole('link', { name: /back to all posts/i })).toHaveAttribute('href', '/posts')
})
