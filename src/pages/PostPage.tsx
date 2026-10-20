import { Link, useParams } from 'react-router'
import Card from '../components/ui/Card.tsx'
import LikeButton from '../components/LikeButton.tsx'
import Tag from '../components/ui/Tag.tsx'
import { formatDate } from '../lib/formatDate.ts'
import type { Post } from '../types.ts'

type PostPageProps = {
  posts: Post[]
}

function PostPage({ posts }: PostPageProps) {
  // useParams gives the :id part of /posts/:id as a string, so convert it before comparing
  const { id } = useParams()
  const post = posts.find((item) => item.id === Number(id))

  // /posts/999 or /posts/abc: a clear message instead of a blank page
  if (!post) {
    return (
      <Card>
        <h1>Post not found</h1>
        <p>There is no post with id "{id}". It may have been removed, or the link has a typo.</p>
        <p>
          <Link to="/posts">← Back to all posts</Link>
        </p>
      </Card>
    )
  }

  return (
    <Card as="article">
      <h1>{post.title}</h1>
      <time className="post-date" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      <ul className="tag-list" aria-label="Tags">
        {post.tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
      <div className="post-body">
        {post.body.map((paragraph, index) => (
          // The paragraphs never change order, so the index is a safe key here
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="post-card__actions">
        <LikeButton postId={post.id} postTitle={post.title} />
      </div>
      <p>
        <Link to="/posts">← Back to all posts</Link>
      </p>
    </Card>
  )
}

export default PostPage
