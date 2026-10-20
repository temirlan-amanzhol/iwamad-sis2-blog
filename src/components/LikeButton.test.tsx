import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { expect, test } from 'vitest'
import { LikesProvider } from '../context/LikesContext.tsx'
import LikeButton from './LikeButton.tsx'

test('clicking the like button turns it on and off', async () => {
  const user = userEvent.setup()
  render(
    <LikesProvider>
      <LikeButton postId={1} postTitle="First post" />
    </LikesProvider>,
  )

  const button = screen.getByRole('button', { name: /like: first post/i })
  expect(button).toHaveAttribute('aria-pressed', 'false')
  expect(button).toHaveTextContent('♡ Like')

  await user.click(button)
  expect(button).toHaveAttribute('aria-pressed', 'true')
  expect(button).toHaveTextContent('♥ Like')

  await user.click(button)
  expect(button).toHaveAttribute('aria-pressed', 'false')
})

test('each post keeps its own like', async () => {
  const user = userEvent.setup()
  render(
    <LikesProvider>
      <LikeButton postId={1} postTitle="First post" />
      <LikeButton postId={2} postTitle="Second post" />
    </LikesProvider>,
  )

  await user.click(screen.getByRole('button', { name: /like: first post/i }))

  expect(screen.getByRole('button', { name: /like: first post/i })).toHaveAttribute('aria-pressed', 'true')
  expect(screen.getByRole('button', { name: /like: second post/i })).toHaveAttribute('aria-pressed', 'false')
})
