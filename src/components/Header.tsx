import { NavLink } from 'react-router'
import Button from './ui/Button.tsx'
import { useAuth } from '../context/AuthContext.tsx'
import logo from '../assets/logo.svg'
import type { NavItem } from '../types.ts'

type HeaderProps = {
  title: string
  links: NavItem[]
}

function Header({ title, links }: HeaderProps) {
  const { signedIn, signOut } = useAuth()

  return (
    <header className="site-header">
      <NavLink className="site-header__brand" to="/">
        {/* Empty alt: the title next to the logo already says what the link is */}
        <img src={logo} alt="" width="32" height="32" />
        <span>{title}</span>
      </NavLink>

      <nav className="site-nav" aria-label="Main">
        {links.map((link) => (
          // end: "/" should be active only on the home page, not on every page
          <NavLink key={link.id} to={link.to} end={link.to === '/'}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="site-header__auth">
        {signedIn ? (
          <Button variant="secondary" onClick={signOut}>
            Sign out
          </Button>
        ) : (
          <NavLink className="button button--secondary" to="/sign-in">
            Sign in
          </NavLink>
        )}
      </div>
    </header>
  )
}

export default Header
