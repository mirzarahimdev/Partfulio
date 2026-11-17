import { SectionHeading } from '../components/SectionHeading'
import { SkillCard } from '../components/SkillCard'
import { ScrollReveal } from '../components/ScrollReveal'
import { skillCategories, skills } from '../data/skills'
import { useLanguage } from '../i18n/LanguageContext'

export function Skills() {
  const { t } = useLanguage()

  const categoryLabels = {
    mobile: t.skills.categories.mobile,
    backend: t.skills.categories.backend,
    tools: t.skills.categories.tools,
  } as const

  return (
    <section id="skills" className="border-t border-border bg-bg-secondary py-20 md:py-28">
      <div className="container-wide section-pad">
        <SectionHeading
          label={t.skills.label}
          title={
            <>
              <span className="block">{t.skills.titleLine1}</span>
              <span className="block">{t.skills.titleLine2}</span>
            </>
          }
        />

        <div className="space-y-14">
          {skillCategories.map((category) => {
            const items = skills.filter((skill) => skill.category === category)
            return (
              <div key={category}>
                <ScrollReveal>
                  <p className="label-mono mb-6">{categoryLabels[category]}</p>
                </ScrollReveal>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {items.map((skill, index) => (
                    <ScrollReveal key={skill.id} delay={index * 0.05}>
                      <SkillCard skill={skill} />
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
