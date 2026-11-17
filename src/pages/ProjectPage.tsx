import { motion, useReducedMotion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProjectById } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

const ease = [0.22, 1, 0.36, 1] as const

export function ProjectPage() {
  const { projectId } = useParams()
  const { t } = useLanguage()
  const reduced = useReducedMotion()
  const project = projectId ? getProjectById(projectId) : undefined

  if (!project) {
    return <Navigate to="/#projects" replace />
  }

  const copy = t.projects.items[project.id]

  return (
    <main className="min-h-svh pt-24 md:pt-28">
      <div className="container-wide section-pad pb-20">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease }}
        >
          <Link
            to="/#projects"
            className="mb-10 inline-flex items-center gap-2 text-sm text-text-secondary transition-colors hover:text-text"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            {t.projects.back}
          </Link>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <motion.div
            className="lg:col-span-7"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.05 }}
          >
            <div className="overflow-hidden border border-border bg-card">
              <img
                src={project.image}
                alt={`${copy.name} preview`}
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 0.12 }}
          >
            <p className="label-mono mb-4">
              {project.number} / {copy.category}
            </p>
            <h1 className="editorial-heading mb-6 text-[clamp(2.4rem,5vw,4rem)] text-text">
              {copy.name}
            </h1>

            <div className="mb-8 space-y-3 border border-border bg-card p-5">
              <div className="flex items-center justify-between gap-4 border-b border-border pb-3">
                <span className="label-mono">{t.projects.status}</span>
                <span className="text-sm text-text">{copy.status}</span>
              </div>
              <div>
                <p className="label-mono mb-3">{t.projects.technologies}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="border border-border px-3 py-1 text-xs text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="label-mono mb-3">{t.projects.overview}</p>
            <p className="mb-8 text-base leading-relaxed text-text-secondary">
              {copy.description}
            </p>

            {project.href ? (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 text-sm text-text transition-colors hover:border-accent hover:bg-card"
              >
                {t.projects.view}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <p className="text-sm text-text-secondary/60">
                {t.projects.linkUnavailable}
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </main>
  )
}
