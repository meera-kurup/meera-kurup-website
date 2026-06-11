import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft } from 'lucide-react'
import { getIssueBySlug } from '../lib/newsletter'

export default function NewsletterIssue() {
  const { slug } = useParams<{ slug: string }>()
  const issue = slug ? getIssueBySlug(slug) : undefined

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!issue) {
    return (
      <section className="section-padding pt-28 max-w-3xl mx-auto min-h-screen">
        <p className="text-gray-600">Issue not found.</p>
        <Link to="/newsletter" className="text-primary font-medium mt-4 inline-block">
          ← Back to the newsletter
        </Link>
      </section>
    )
  }

  return (
    <article className="section-padding pt-28 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto">
        <Link
          to="/newsletter"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-8 hover:gap-3 transition-all"
        >
          <ArrowLeft size={15} />
          All issues
        </Link>

        {/* react-markdown renders the frontmatter-stripped body, including the issue's own
            H1/metadata blockquote, styled via the Tailwind typography plugin. */}
        <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-a:text-primary prose-strong:text-gray-900 prose-blockquote:border-accent prose-blockquote:text-gray-500">
          <h1 className="!mb-2">{issue.title}</h1>
          <p className="!mt-0 text-sm text-accent font-semibold tracking-wide uppercase">
            {issue.sector} · {issue.stage}
          </p>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{issue.body}</ReactMarkdown>
        </div>
      </div>
    </article>
  )
}
