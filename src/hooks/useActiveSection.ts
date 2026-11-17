import { useEffect, useState } from 'react'
import { sectionIds, type SectionId } from '../data/navigation'

export function useActiveSection(offset = 120) {
  const [active, setActive] = useState<SectionId>('home')

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el))

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]?.target.id) {
          setActive(visible[0].target.id as SectionId)
        }
      },
      {
        rootMargin: `-${offset}px 0px -45% 0px`,
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [offset])

  return active
}
