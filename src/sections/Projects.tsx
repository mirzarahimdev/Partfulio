import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'
import { useLanguage } from '../i18n/LanguageContext'

export function Projects() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="border-t border-border py-20 md:py-28">
      <div className="container-wide section-pad">
        <SectionHeading label={t.projects.label} title={t.projects.title} />
        <div>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
