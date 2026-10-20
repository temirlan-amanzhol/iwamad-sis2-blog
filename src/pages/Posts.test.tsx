import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { expect, test } from 'vitest'
import { LikesProvider } from '../context/LikesContext.tsx'
import { posts } from '../data/posts.ts'
import Posts from './Posts.tsx'

test('the list shows one card per post in the array', () => {
  // PostCard has Links and a LikeButton, so it needs a router and the likes provider
  render(
    <MemoryRouter>
      <LikesProvider>
        <Posts posts={posts} />
      </LikesProvider>
    </MemoryRouter>,
  )

  expect(screen.getAllByRole('article')).toHaveLength(posts.length)
  for (const post of posts) {
    expect(screen.getByRole('link', { name: post.title })).toHaveAttribute('href', `/posts/${post.id}`)
  }
})
