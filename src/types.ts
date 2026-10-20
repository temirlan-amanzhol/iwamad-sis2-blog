// A page inside the app (used with NavLink in the Header)
export type NavItem = {
  id: string
  label: string
  to: string
}

// One blog post. The whole blog is an array of these in src/data/posts.ts
export type Post = {
  id: number
  title: string
  date: string // 'YYYY-MM-DD'
  excerpt: string
  body: string[] // one string per paragraph
  tags: string[]
}
