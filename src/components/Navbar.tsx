import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { navigationItems, type SectionId } from '../data/navigation'
import { useActiveSection } from '../hooks/useActiveSection'
import { useLanguage } from '../i18n/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Navbar() {
  const { t } = useLanguage()
  const active = useActiveSection()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const reduced = useReducedMotion()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  function goToSection(id: SectionId) {
    setOpen(false)
    if (!isHome) {
      navigate(`/#${id}`)
      return
    }
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  const navLabels: Record<SectionId, string> = {
    home: t.nav.home,
    about: t.nav.about,
    skills: t.nav.skills,
    projects: t.nav.projects,
    experience: t.nav.experience,
    contact: t.nav.contact,
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-border/80 bg-bg/75 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide section-pad flex h-16 items-center justify-between md:h-20">
        <Link
          to="/"
          className="text-sm font-semibold tracking-[0.22em] text-text"
          onClick={() => setOpen(false)}
        >
          {t.brand}
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Primary"
        >
          {navigationItems.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => goToSection(item.id)}
              className={`relative text-xs tracking-[0.14em] transition-colors ${
                isHome && active === item.id
                  ? 'text-text'
                  : 'text-text-secondary hover:text-text'
              }`}
            >
              {navLabels[item.id]}
              {isHome && active === item.id ? (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute -bottom-2 left-0 h-px w-full bg-accent"
                />
              ) : null}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4 md:gap-6">
          <div className="hidden items-center gap-3 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="hidden text-[11px] tracking-[0.12em] text-text-secondary md:inline">
              {t.available}
            </span>
          </div>

          <LanguageSwitcher className="hidden md:flex" />

          <button
            type="button"
            className="inline-flex items-center justify-center border border-border p-2 text-text lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.menuClose : t.menuOpen}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            initial={reduced ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.28 }}
            className="border-t border-border bg-bg/95 backdrop-blur-md lg:hidden"
          >
            <div className="section-pad container-wide flex flex-col gap-1 py-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-xs text-text-secondary">{t.available}</span>
                </div>
                <LanguageSwitcher />
              </div>
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => goToSection(item.id)}
                  className={`border-b border-border py-4 text-left text-lg tracking-tight ${
                    isHome && active === item.id
                      ? 'text-text'
                      : 'text-text-secondary'
                  }`}
                >
                  {navLabels[item.id]}
                </button>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  )
}
