export const sectionIds = [
  'home',
  'about',
  'skills',
  'projects',
  'experience',
  'contact',
] as const

export type SectionId = (typeof sectionIds)[number]

export const navigationItems: { id: SectionId; href: string }[] = [
  { id: 'home', href: '#home' },
  { id: 'about', href: '#about' },
  { id: 'skills', href: '#skills' },
  { id: 'projects', href: '#projects' },
  { id: 'experience', href: '#experience' },
  { id: 'contact', href: '#contact' },
]
