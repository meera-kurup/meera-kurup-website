import fm from 'front-matter'

export type IssueMeta = {
  title: string
  slug: string
  date: string
  issue: number
  company: string
  sector: string
  stage: string
  summary: string
  cover?: string
  sources?: string[]
}

export type Issue = IssueMeta & { body: string }

// Eagerly import every issue Markdown file as a raw string at build time.
// Drop a new `src/content/newsletter/YYYY-MM-DD-<slug>.md` to publish a new issue —
// no manifest to maintain.
const files = import.meta.glob('../content/newsletter/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function parse(raw: string): Issue {
  const { attributes, body } = fm<Partial<IssueMeta>>(raw)
  return {
    title: attributes.title ?? 'Untitled',
    slug: attributes.slug ?? '',
    date: attributes.date ? String(attributes.date) : '',
    issue: attributes.issue ?? 0,
    company: attributes.company ?? '',
    sector: attributes.sector ?? '',
    stage: attributes.stage ?? '',
    summary: attributes.summary ?? '',
    cover: attributes.cover,
    sources: attributes.sources,
    body,
  }
}

const issues: Issue[] = Object.values(files)
  .map(parse)
  .filter((i) => i.slug)
  .sort((a, b) => (a.date < b.date ? 1 : -1)) // newest first

export function getIssues(): Issue[] {
  return issues
}

export function getIssueBySlug(slug: string): Issue | undefined {
  return issues.find((i) => i.slug === slug)
}

// Resolve a `/images/...` path (authored absolute) against the Vite base path so it
// works on GitHub Pages under /meera-kurup-website/.
export function withBase(path?: string): string | undefined {
  if (!path) return undefined
  if (/^https?:\/\//.test(path)) return path
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
