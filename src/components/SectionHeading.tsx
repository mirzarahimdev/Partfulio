import type { ReactNode } from 'react'
import { ScrollReveal } from './ScrollReveal'

type SectionHeadingProps = {
  label: string
  title: ReactNode
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={`mb-12 md:mb-16 ${align === 'center' ? 'text-center' : ''}`}
    >
      <p className="label-mono mb-5">{label}</p>
      <h2 className="editorial-heading text-[clamp(2.4rem,6vw,5rem)] text-text text-balance">
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-text-secondary ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      ) : null}
    </ScrollReveal>
  )
}
