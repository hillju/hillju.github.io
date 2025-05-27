import { DISABLED_ROUTES } from './disabledRoutes'

const headerNavLinks = [
  { href: '/', title: 'Home' },
  { href: '/blog', title: 'Blog' },
  { href: '/projects', title: 'Projects' },
  { href: '/about', title: 'About' },
].filter(link => !DISABLED_ROUTES.includes(link.href))

export default headerNavLinks
