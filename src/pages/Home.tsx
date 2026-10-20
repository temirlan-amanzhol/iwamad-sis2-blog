import { Link } from 'react-router'
import Card from '../components/ui/Card.tsx'

function Home() {
  return (
    <Card>
      <h1>Notes from a marketer learning React</h1>
      <p>
        I'm Temirlan. I run Meta ads and make Reels for small businesses, and this term I'm
        learning to build web apps. This blog is where I write down what works – in ads and in
        code.
      </p>
      <p>
        <Link to="/posts">Read the posts →</Link>
      </p>
    </Card>
  )
}

export default Home
