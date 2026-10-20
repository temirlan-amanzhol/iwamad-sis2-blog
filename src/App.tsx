import { Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import Home from './pages/Home.tsx'
import Posts from './pages/Posts.tsx'
import Contact from './pages/Contact.tsx'
import NotFound from './pages/NotFound.tsx'
import type { NavItem } from './types.ts'

const navLinks: NavItem[] = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'posts', label: 'Posts', to: '/posts' },
  { id: 'contact', label: 'Contact', to: '/contact' },
]

function App() {
  return (
    <Routes>
      {/* One layout route: every page is rendered inside its <Outlet /> */}
      <Route element={<Layout title="Temirlan's blog" navLinks={navLinks} />}>
        <Route index element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
