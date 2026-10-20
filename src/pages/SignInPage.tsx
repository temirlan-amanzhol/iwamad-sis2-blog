import { Link, useLocation, useNavigate } from 'react-router'
import Button from '../components/ui/Button.tsx'
import Card from '../components/ui/Card.tsx'
import { useAuth } from '../context/AuthContext.tsx'

// What RequireAuth puts into the location state
type SignInState = {
  from?: string
}

function SignInPage() {
  const { signedIn, signIn, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as SignInState | null)?.from ?? '/favorites'

  function handleSignIn() {
    signIn()
    // replace: the Back button should not lead to the sign-in page again
    navigate(from, { replace: true })
  }

  if (signedIn) {
    return (
      <Card>
        <h1>You are signed in</h1>
        <p>
          <Link to="/favorites">Go to your favorites →</Link>
        </p>
        <div>
          <Button variant="secondary" onClick={signOut}>
            Sign out
          </Button>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <h1>Sign in</h1>
      <p>Favorites are for signed-in readers. Sign in to see the posts you liked.</p>
      <p className="post-date">No password needed – this is a demo sign-in.</p>
      <div>
        <Button onClick={handleSignIn}>Sign in</Button>
      </div>
    </Card>
  )
}

export default SignInPage
