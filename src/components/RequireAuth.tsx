import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../context/AuthContext.tsx'

// A layout route that checks before it renders its <Outlet />.
// Signed out: <Navigate> sends the reader to the sign-in page and remembers where they
// wanted to go (state.from), so after signing in they come back to that page
function RequireAuth() {
  const { signedIn } = useAuth()
  const location = useLocation()

  if (!signedIn) {
    return <Navigate to="/sign-in" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}

export default RequireAuth
