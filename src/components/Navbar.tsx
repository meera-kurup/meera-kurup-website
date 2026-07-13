import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const base = import.meta.env.BASE_URL
const sectionLinks = [
  { label: 'Home', href: base },
  { label: 'About', href: `${base}#about` },
  { label: 'Experience', href: `${base}#experience` },
  { label: 'Early Ventures', href: `${base}#ventures` },
  { label: 'Contact', href: `${base}#contact` },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-sm border-b transition-colors duration-300 ${
        scrolled ? 'border-line' : 'border-transparent'
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href={base} className="text-base font-bold text-ink">
          Meera Kurup
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex gap-7 text-sm text-ink items-center">
          {sectionLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="border-b border-transparent hover:border-accent pb-0.5 transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-ink"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-paper border-t border-line px-6 pb-4">
          <ul className="flex flex-col gap-4 pt-4 text-sm text-ink">
            {sectionLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-accent-dark transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
