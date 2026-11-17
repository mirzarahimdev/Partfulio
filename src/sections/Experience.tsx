import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { useLanguage } from '../i18n/LanguageContext'

const stepKeys = ['discover', 'design', 'develop', 'improve'] as const

export function Experience() {
  const { t } = useLanguage()

  return (
    <section
      id="experience"
      className="border-t border-border bg-bg-secondary py-20 md:py-28"
    >
      <div className="container-wide section-pad">
        <SectionHeading
          label={t.experience.label}
          title={
            <>
              <span className="block">{t.experience.titleLine1}</span>
              <span className="block">{t.experience.titleLine2}</span>
            </>
          }
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stepKeys.map((key, index) => {
            const step = t.experience.steps[key]
            const number = String(index + 1).padStart(2, '0')

            return (
              <ScrollReveal key={key} delay={index * 0.08}>
                <article className="flex h-full flex-col border border-border bg-card p-6 md:p-8 transition-colors duration-300 hover:border-accent/40">
                  <p className="label-mono mb-8 text-accent">{number}</p>
                  <h3 className="editorial-heading mb-4 text-2xl md:text-3xl text-text">
                    {step.title}
                  </h3>
                  <p className="mt-auto text-sm md:text-base leading-relaxed text-text-secondary">
                    {step.description}
                  </p>
                </article>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
