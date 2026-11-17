import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '../i18n/LanguageContext'

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  const { t } = useLanguage()
  const reduced = useReducedMotion()

  function scrollTo(id: string) {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-end overflow-hidden pb-10 pt-28 md:pb-14 md:pt-32"
    >
      <div
        className="pointer-events-none absolute inset-0 grid-bg opacity-40"
        aria-hidden="true"
      />

      {/* Large background MID mark — same role as UzNext UN watermark */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        aria-hidden="true"
      >
        <span
          className="font-semibold tracking-[-0.08em] text-text/[0.045] leading-none"
          style={{
            fontSize: 'clamp(10rem, 38vw, 28rem)',
          }}
        >
          MID
        </span>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-bg via-bg/80 to-transparent"
        aria-hidden="true"
      />

      <div className="container-wide section-pad relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.05 }}
            className="mb-8 flex flex-wrap gap-x-4 gap-y-2"
          >
            <p className="label-mono">{t.hero.label}</p>
            <p className="label-mono">{t.hero.location}</p>
          </motion.div>

          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.15 }}
            className="editorial-heading text-[clamp(3rem,9.5vw,7.5rem)] text-text"
          >
            <span className="block">{t.hero.titleLine1}</span>
            <span className="block">{t.hero.titleLine2}</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.28 }}
            className="mt-8 max-w-xl text-base md:text-lg leading-relaxed text-text-secondary"
          >
            {t.hero.subtitle}
          </motion.p>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              onClick={() => scrollTo('projects')}
              className="group inline-flex items-center gap-3 border border-border bg-text px-6 py-3.5 text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              {t.hero.ctaProjects}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              onClick={() => scrollTo('contact')}
              className="group inline-flex items-center gap-3 border border-border px-6 py-3.5 text-sm text-text transition-colors hover:border-accent hover:bg-card"
            >
              {t.hero.ctaContact}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </motion.div>
        </div>

        <motion.button
          initial={reduced ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease, delay: 0.55 }}
          type="button"
          onClick={() => scrollTo('about')}
          className="mt-16 inline-flex items-center gap-3 text-[11px] tracking-[0.2em] text-text-secondary transition-colors hover:text-text md:mt-20"
        >
          {t.hero.scroll}
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" aria-hidden="true" />
        </motion.button>
      </div>
    </section>
  )
}
