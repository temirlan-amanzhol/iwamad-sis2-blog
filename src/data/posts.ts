import type { Post } from '../types.ts'

// The blog's data. Add one object here and you get one more card and one more page –
// no component has to change. ids must be unique, they are the /posts/<id> part of the URL
export const posts: Post[] = [
  {
    id: 1,
    title: 'Three Reels hooks that kept people watching',
    date: '2026-09-06',
    excerpt: 'The first second decides everything. Three openings I test on every client video.',
    body: [
      'Most people decide in the first second whether they keep watching a Reel. So I stopped starting videos with a logo or a "Hi everyone" and started with the result.',
      'Hook one: show the end first – the finished cake, the clean car, the full café – then rewind to how it happened. Hook two: a question the viewer already asks themselves, written on screen. Hook three: movement towards the camera in the very first frame.',
      'None of this is magic. I film two or three openings for the same video and look at the retention graph after a day. The graph tells me which one to keep.',
    ],
    tags: ['Reels', 'Video'],
  },
  {
    id: 2,
    title: 'What a $20 Meta ads test taught me',
    date: '2026-09-15',
    excerpt: 'Small budget, three creatives, one question: which picture makes people click?',
    body: [
      'Before a client spends real money, I run a small test: twenty dollars, three creatives, the same audience and the same text.',
      'The result surprised me again. The polished studio photo lost. The phone video of the owner talking won with almost twice the click rate.',
      'The lesson I keep relearning: people click on people. A test this small does not prove much, but it is cheap enough to stop me guessing.',
    ],
    tags: ['Ads', 'Meta'],
  },
  {
    id: 3,
    title: 'A one-month SMM plan for a small coffee shop',
    date: '2026-09-27',
    excerpt: 'Twelve posts, four Reels and one rule: every post answers a question a customer asked.',
    body: [
      'A small coffee shop does not need content every day. It needs content that answers real questions: what is new, when are you open, what is the best thing to order.',
      'My plan for one month: three posts a week, one Reel a week, and stories every day the shop has something to show. Every post starts from a question a customer really asked at the counter.',
      'At the end of the month we look at saves and direct messages, not only likes. Those two numbers show who actually wants to come in.',
    ],
    tags: ['SMM', 'Planning'],
  },
  {
    id: 4,
    title: 'Why I stopped writing div soup',
    date: '2026-10-05',
    excerpt: 'header, nav, main, article, footer – semantic HTML made my pages easier to style and to read.',
    body: [
      'My first pages were one div inside another inside another. They looked fine, but I could not find anything in my own code a week later.',
      'Semantic tags fixed that. A header, a nav, a main and a footer tell me – and a screen reader – what each part of the page is for. An article is a thing that makes sense on its own, like this post.',
      'The bonus: CSS got shorter, because I can style the main or the footer directly instead of inventing class names for every div.',
    ],
    tags: ['HTML', 'CSS'],
  },
  {
    id: 5,
    title: 'useState finally clicked for me',
    date: '2026-10-14',
    excerpt: 'React does not change the page. It changes the state, and the page follows.',
    body: [
      'For a week I tried to change text on the page the old way and React kept undoing it. The idea I was missing: the page is drawn from state, so I change the state and React draws the page again.',
      'The like button on every post in this blog is exactly that. Clicking it calls a setter, the state changes, and the button shows the new value at once – no reload.',
      'Once that clicked, controlled forms, toggles and even route protection stopped looking like separate topics. They are all "keep a value in state, draw the page from it".',
    ],
    tags: ['React', 'TypeScript'],
  },
  {
    id: 6,
    title: 'A page only for signed-in readers',
    date: '2026-10-23',
    excerpt: 'Hiding a link is not protection. The route itself has to check before it shows the page.',
    body: [
      'This blog has a Favorites page for signed-in readers. My first idea was to hide the Favorites link when you are signed out. But anyone can still type the address, so hiding a link protects nothing.',
      'The fix is a small layout route that checks first. If you are signed in, it shows the page. If not, it sends you to the sign-in page and remembers where you wanted to go, so after signing in you land back there.',
      'Signing in here is only one true or false value in React state, with no password and no server. That is enough to learn the idea. Real accounts come later in the course.',
    ],
    tags: ['React', 'Routing'],
  },
]
