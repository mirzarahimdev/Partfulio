import { ArrowUp } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { socialLinks } from '../config/socialLinks'
import { navigationItems, type SectionId } from '../data/navigation'
import { useLanguage } from '../i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const location = useLocation()
  const navigate = useNavigate()
  const isHome = location.pathname === '/'

  const navLabels: Record<SectionId, string> = {
    home: t.nav.home,
    about: t.nav.about,
    skills: t.nav.skills,
    projects: t.nav.projects,
    experience: t.nav.experience,
    contact: t.nav.contact,
  }

  function goToSection(id: SectionId) {
    if (!isHome) {
      navigate(`/#${id}`)
      return
    }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  function backToTop() {
    if (!isHome) {
      navigate('/')
      return
    }
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border bg-bg-secondary">
      <div className="container-wide section-pad py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Link
              to="/"
              className="text-sm font-semibold tracking-[0.22em] text-text"
            >
              {t.brand}
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-text-secondary">
              {t.footer.description}
            </p>
            <p className="mt-6 text-xs tracking-[0.14em] text-text-secondary">
              {t.footer.location}
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="label-mono mb-4">{t.footer.navigation}</p>
              <ul className="space-y-3">
                {navigationItems.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => goToSection(item.id)}
                      className="text-sm text-text-secondary transition-colors hover:text-text"
                    >
                      {navLabels[item.id]}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="label-mono mb-4">{t.contact.social}</p>
              <ul className="space-y-3">
                {Object.values(socialLinks).map((social) => (
                  <li key={social.label}>
                    {social.configured ? (
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-text-secondary transition-colors hover:text-text"
                      >
                        {social.label}
                      </a>
                    ) : (
                      <span
                        className="text-sm text-text-secondary/50"
                        title={t.projects.linkUnavailable}
                      >
                        {social.label}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-2 lg:col-span-1">
              <button
                type="button"
                onClick={backToTop}
                className="inline-flex items-center gap-2 border border-border px-4 py-3 text-xs tracking-[0.14em] text-text transition-colors hover:border-accent hover:bg-card"
              >
                {t.footer.backToTop}
                <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>{t.footer.copyright}</p>
          <p className="tracking-[0.12em]">{t.role}</p>
        </div>
      </div>
    </footer>
  )
}
