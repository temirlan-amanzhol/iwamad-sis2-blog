import { Route, Routes } from 'react-router'
import Layout from './components/Layout.tsx'
import RequireAuth from './components/RequireAuth.tsx'
import { AuthProvider } from './context/AuthContext.tsx'
import { LikesProvider } from './context/LikesContext.tsx'
import Home from './pages/Home.tsx'
import Posts from './pages/Posts.tsx'
import PostPage from './pages/PostPage.tsx'
import Contact from './pages/Contact.tsx'
import SignInPage from './pages/SignInPage.tsx'
import FavoritesPage from './pages/FavoritesPage.tsx'
import NotFound from './pages/NotFound.tsx'
import { posts } from './data/posts.ts'
import type { NavItem } from './types.ts'

const navLinks: NavItem[] = [
  { id: 'home', label: 'Home', to: '/' },
  { id: 'posts', label: 'Posts', to: '/posts' },
  { id: 'favorites', label: 'Favorites', to: '/favorites' },
  { id: 'contact', label: 'Contact', to: '/contact' },
]

function App() {
  return (
    // Sign-in and likes are shared by every page, so the providers wrap all the routes
    <AuthProvider>
      <LikesProvider>
        <Routes>
          {/* One layout route: every page is rendered inside its <Outlet /> */}
          <Route element={<Layout title="Temirlan's blog" navLinks={navLinks} />}>
            <Route index element={<Home posts={posts} />} />
            <Route path="posts" element={<Posts posts={posts} />} />
            <Route path="posts/:id" element={<PostPage posts={posts} />} />
            <Route path="contact" element={<Contact />} />
            <Route path="sign-in" element={<SignInPage />} />

            {/* Protected: RequireAuth renders these only for a signed-in reader */}
            <Route element={<RequireAuth />}>
              <Route path="favorites" element={<FavoritesPage posts={posts} />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LikesProvider>
    </AuthProvider>
  )
}

export default App
