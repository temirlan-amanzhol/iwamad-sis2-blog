import PostCard from '../components/PostCard.tsx'
import type { Post } from '../types.ts'

type PostsProps = {
  posts: Post[]
}

function Posts({ posts }: PostsProps) {
  return (
    <section>
      <h1 className="page-title">Posts</h1>
      {/* One PostCard per object in the array; key = the post id */}
      <div className="post-grid">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  )
}

export default Posts
