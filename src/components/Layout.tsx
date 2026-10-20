import { Outlet } from 'react-router'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import type { NavItem } from '../types.ts'

type LayoutProps = {
  title: string
  navLinks: NavItem[]
}

// The layout route: Header and Footer stay, only the <Outlet /> part changes
function Layout({ title, navLinks }: LayoutProps) {
  return (
    <>
      <Header title={title} links={navLinks} />
      <main>
        <Outlet />
      </main>
      <Footer owner="Temirlan Amanzhol" year={2026} note="Built for IWaMAD, SIS 2." />
    </>
  )
}

export default Layout
