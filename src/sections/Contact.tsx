import { ContactForm } from '../components/ContactForm'
import { SectionHeading } from '../components/SectionHeading'
import { ScrollReveal } from '../components/ScrollReveal'
import { socialLinks } from '../config/socialLinks'
import { useLanguage } from '../i18n/LanguageContext'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="border-t border-border py-20 md:py-28">
      <div className="container-wide section-pad">
        <SectionHeading
          label={t.contact.label}
          title={
            <>
              <span className="block">{t.contact.titleLine1}</span>
              <span className="block">{t.contact.titleLine2}</span>
            </>
          }
          description={t.contact.description}
        />

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <ScrollReveal className="lg:col-span-7">
            <ContactForm />
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-5">
            <div className="border border-border bg-card p-6 md:p-8">
              <p className="label-mono mb-6">{t.contact.social}</p>
              <ul className="space-y-4">
                {Object.values(socialLinks).map((social) => (
                  <li
                    key={social.label}
                    className="flex items-center justify-between border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-text">{social.label}</span>
                    {social.configured ? (
                      <a
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-sm text-text-secondary transition-colors hover:text-text"
                      >
                        →
                      </a>
                    ) : (
                      <span className="text-xs text-text-secondary/50">
                        {t.projects.linkUnavailable}
                      </span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-border pt-6">
                <p className="label-mono mb-2">{t.about.fields.location}</p>
                <p className="text-text">{t.about.values.location}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
