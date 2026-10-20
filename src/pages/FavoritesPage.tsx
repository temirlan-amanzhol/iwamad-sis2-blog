import { Link } from 'react-router'
import PostCard from '../components/PostCard.tsx'
import { useLikes } from '../context/LikesContext.tsx'
import type { Post } from '../types.ts'

type FavoritesPageProps = {
  posts: Post[]
}

// The protected page: App.tsx puts it inside <RequireAuth />, so it only renders when signed in.
// "Sign out" is in the Header; after it RequireAuth sends the reader to the sign-in page again
function FavoritesPage({ posts }: FavoritesPageProps) {
  const { likedIds } = useLikes()
  const favorites = posts.filter((post) => likedIds.includes(post.id))

  return (
    <section>
      <h1 className="page-title">Your favorites</h1>

      {favorites.length > 0 ? (
        <div className="post-grid">
          {favorites.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p className="empty-state">
          You haven't liked any posts yet. <Link to="/posts">Find one you like →</Link>
        </p>
      )}
    </section>
  )
}

export default FavoritesPage
