import Card from '../components/ui/Card.tsx'

type ContactLink = {
  id: string
  label: string
  href: string
}

const email = 'tioma218@gmail.com'

const links: ContactLink[] = [
  { id: 'github', label: 'GitHub', href: 'https://github.com/temirlan-amanzhol' },
  { id: 'instagram', label: 'Instagram', href: 'https://instagram.com/nonstandrt' },
]

function Contact() {
  return (
    <Card>
      <h1>Contact</h1>
      <p>
        Email: <a href={`mailto:${email}`}>{email}</a>
      </p>
      <ul className="link-list">
        {links.map((link) => (
          <li key={link.id}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </Card>
  )
}

export default Contact
