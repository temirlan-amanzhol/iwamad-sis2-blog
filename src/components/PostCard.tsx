import { Link } from 'react-router'
import Card from './ui/Card.tsx'
import Tag from './ui/Tag.tsx'
import { formatDate } from '../lib/formatDate.ts'
import type { Post } from '../types.ts'

type PostCardProps = {
  post: Post
}

// One card in the list. Everything it shows comes from the post prop
function PostCard({ post }: PostCardProps) {
  return (
    <Card as="article">
      <h2>
        <Link className="post-card__title" to={`/posts/${post.id}`}>
          {post.title}
        </Link>
      </h2>
      <time className="post-date" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      <p>{post.excerpt}</p>
      <ul className="tag-list" aria-label="Tags">
        {post.tags.map((tag) => (
          <li key={tag}>
            <Tag>{tag}</Tag>
          </li>
        ))}
      </ul>
      <div className="post-card__actions">
        <Link className="button button--secondary" to={`/posts/${post.id}`}>
          Read more<span className="visually-hidden">: {post.title}</span>
        </Link>
      </div>
    </Card>
  )
}

export default PostCard
