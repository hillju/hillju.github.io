import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

/* Original blog code preserved
import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
      </div>
      <div className="flex justify-end text-base leading-6 font-medium">
        <Link
          href="/blog"
          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label="To Blog"
        >
          To Blog &rarr;
        </Link>
      </div>
      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
*/

// New landing page code
const socialLinks = [
  { href: siteMetadata.github ?? '', label: 'GitHub', icon: '→' },
  { href: siteMetadata.linkedin ?? '', label: 'LinkedIn', icon: '→' },
]

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-6 pt-6 pb-8 md:space-y-8">
          <h1 className="leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14 dark:text-gray-100">
            Software Engineer | Systems (Thinker?)
          </h1>
          <div className="text-lg leading-8 text-gray-500 dark:text-gray-400">
            <p className="mb-4">
              I'm Justin, a seasoned software engineer based in Colorado, with nearly a decade of experience solving complex problems. From architecting secure microservices to crafting tools that boost developer productivity, I bring a methodical approach and a passion for impactful engineering.
            </p>
          </div>
        </div>

        <div className="py-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Connect with me
          </h2>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 flex items-center"
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
