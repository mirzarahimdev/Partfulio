import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'
import { ScrollReveal } from './ScrollReveal'

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { t } = useLanguage()
  const copy = t.projects.items[project.id]
  const reverse = index % 2 === 1

  return (
    <ScrollReveal delay={index * 0.05}>
      <article
        className={`grid items-center gap-8 border-b border-border py-12 md:py-16 lg:grid-cols-12 lg:gap-12 ${
          reverse ? '' : ''
        }`}
      >
        <Link
          to={`/projects/${project.id}`}
          className={`group relative overflow-hidden border border-border bg-card lg:col-span-7 ${
            reverse ? 'lg:order-2' : 'lg:order-1'
          }`}
        >
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={project.image}
              alt={`${copy.name} preview`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        </Link>

        <div
          className={`flex flex-col lg:col-span-5 ${
            reverse ? 'lg:order-1' : 'lg:order-2'
          }`}
        >
          <p className="label-mono mb-4">
            {project.number} / {copy.category}
          </p>
          <h3 className="editorial-heading mb-4 text-3xl md:text-4xl lg:text-5xl text-text">
            {copy.name}
          </h3>
          <p className="mb-6 max-w-md text-sm md:text-base leading-relaxed text-text-secondary">
            {copy.description}
          </p>
          <div className="mb-8 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="border border-border px-3 py-1 text-xs tracking-wide text-text-secondary"
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="mt-auto flex items-center gap-4">
            <span className="label-mono">{copy.status}</span>
            <Link
              to={`/projects/${project.id}`}
              className="inline-flex items-center gap-2 text-sm text-text transition-opacity hover:opacity-70"
            >
              {t.projects.view}
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </article>
    </ScrollReveal>
  )
}
