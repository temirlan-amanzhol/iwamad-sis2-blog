import { Link } from 'react-router'
import Card from '../components/ui/Card.tsx'
import PostCard from '../components/PostCard.tsx'
import type { Post } from '../types.ts'

type HomeProps = {
  posts: Post[]
}

function Home({ posts }: HomeProps) {
  // Newest first. Copy with [...posts] – sort() would change the original array
  const latest = [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 2)

  return (
    <div className="home">
      <Card>
        <h1>Notes from a marketer learning React</h1>
        <p>
          I'm Temirlan. I run Meta ads and make Reels for small businesses, and this term I'm
          learning to build web apps. This blog is where I write down what works – in ads and in
          code.
        </p>
        <p>
          <Link to="/posts">All posts →</Link>
        </p>
      </Card>

      <section>
        <h2 className="page-title">Latest posts</h2>
        <div className="post-grid">
          {latest.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
