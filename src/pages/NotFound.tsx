import { Link } from 'react-router'
import Card from '../components/ui/Card.tsx'

// Shown for every URL that no route matches (path="*"), inside the layout
function NotFound() {
  return (
    <Card>
      <h1>404 — Page not found</h1>
      <p>There is no page at this address.</p>
      <p>
        <Link to="/">← Go to the home page</Link>
      </p>
    </Card>
  )
}

export default NotFound
