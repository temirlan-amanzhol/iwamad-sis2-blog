# iwamad-sis2-blog

Pages: https://temirlan-amanzhol.github.io/iwamad-sis2-blog/

Tests: Test Files  3 passed (3) · Tests  6 passed (6)

Protected: /favorites

A small blog about ads, Reels and learning React – IWaMAD SIS 2, built with React, TypeScript,
React Router and Vite. Styles come from the Week 5 starter design (tokens and `Button`, `Card`, `Tag`).

## What is where

| Feature | Files |
|---|---|
| Pages inside one layout route (Header and Footer stay) | `src/App.tsx`, `src/components/Layout.tsx`, `src/components/Header.tsx` |
| Posts: one typed array, drawn with `.map()` through `PostCard` | `src/data/posts.ts`, `src/types.ts`, `src/components/PostCard.tsx`, `src/pages/Posts.tsx` |
| A page per post at `/posts/<id>` (`useParams`), message for an unknown id | `src/pages/PostPage.tsx` |
| Like button, each post keeps its own value (Context + `useState`) | `src/context/LikesContext.tsx`, `src/components/LikeButton.tsx` |
| 404 page for unknown URLs | `src/pages/NotFound.tsx` |
| Route protection: `/favorites` only for a signed-in reader | `src/components/RequireAuth.tsx`, `src/context/AuthContext.tsx`, `src/pages/SignInPage.tsx`, `src/pages/FavoritesPage.tsx` |
| Tests (Vitest + React Testing Library) | `src/**/*.test.tsx` |

Signing in is one boolean in React state (no password, no server), so sign-in and likes reset on refresh.

## Scripts

```bash
npm ci           # install exactly the versions in package-lock.json
npm run dev      # local dev server
npm test         # Vitest + React Testing Library
npm run lint     # oxlint
npm run build    # type check + production build into docs/ (+ docs/404.html)
```

GitHub Pages publishes the `main` branch, folder `/docs`. `docs/404.html` is a copy of `index.html`,
so opening `/posts/3` directly or pressing refresh still loads the app.
