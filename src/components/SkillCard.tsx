import {
  Boxes,
  Code2,
  Container,
  Flame,
  GitBranch,
  GitFork,
  Network,
  Smartphone,
  SquareCode,
  Terminal,
  Workflow,
} from 'lucide-react'
import type { SkillId, SkillItem } from '../data/skills'
import { useLanguage } from '../i18n/LanguageContext'

const icons: Record<SkillId, typeof Code2> = {
  flutter: Smartphone,
  dart: Code2,
  firebase: Flame,
  python: Terminal,
  fastapi: Workflow,
  rest: Network,
  git: GitBranch,
  github: GitFork,
  docker: Container,
  cursor: Boxes,
  vscode: SquareCode,
}

type SkillCardProps = {
  skill: SkillItem
}

export function SkillCard({ skill }: SkillCardProps) {
  const { t } = useLanguage()
  const Icon = icons[skill.id]
  const description = t.skills.items[skill.id]

  return (
    <article className="group border border-border bg-card p-6 md:p-7 transition-colors duration-300 hover:border-accent/40 hover:bg-bg-secondary">
      <div className="mb-5 flex h-11 w-11 items-center justify-center border border-border text-accent transition-transform duration-300 group-hover:-translate-y-0.5">
        <Icon className="h-5 w-5" strokeWidth={1.4} aria-hidden="true" />
      </div>
      <h3 className="mb-2 text-lg font-medium tracking-tight text-text">
        {skill.name}
      </h3>
      <p className="text-sm leading-relaxed text-text-secondary">{description}</p>
    </article>
  )
}
