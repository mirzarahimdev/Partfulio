import { AboutPortrait } from '../components/AboutPortrait'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { useLanguage } from '../i18n/LanguageContext'

export function About() {
  const { t } = useLanguage()

  const info = [
    { label: t.about.fields.name, value: t.about.values.name },
    { label: t.about.fields.location, value: t.about.values.location },
    {
      label: t.about.fields.specialization,
      value: t.about.values.specialization,
    },
    {
      label: t.about.fields.technologies,
      value: t.about.values.technologies,
    },
    { label: t.about.fields.education, value: t.about.values.education },
  ]

  return (
    <section id="about" className="border-t border-border py-20 md:py-28">
      <div className="container-wide section-pad">
        <SectionHeading
          label={t.about.label}
          title={
            <>
              <span className="block">{t.about.titleLine1}</span>
              <span className="block">{t.about.titleLine2}</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
          <ScrollReveal className="lg:col-span-5">
            <AboutPortrait />
          </ScrollReveal>

          <div className="lg:col-span-7 space-y-10">
            <ScrollReveal>
              <div className="space-y-6 text-base md:text-lg leading-relaxed text-text-secondary">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p className="border-l border-border pl-5 text-text/90">
                  {t.about.bio}
                </p>
              </div>
            </ScrollReveal>

            <div className="border border-border bg-card">
              {info.map((item, index) => (
                <ScrollReveal
                  key={item.label}
                  delay={index * 0.06}
                  className={`grid gap-2 px-6 py-5 md:grid-cols-[160px_1fr] md:gap-6 md:px-8 ${
                    index < info.length - 1 ? 'border-b border-border' : ''
                  }`}
                >
                  <p className="label-mono">{item.label}</p>
                  <p className="text-sm md:text-base text-text">{item.value}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
