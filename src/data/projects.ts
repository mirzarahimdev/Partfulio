export type ProjectId =
  | 'antiApk'
  | 'shazam'
  | 'myController'
  | 'emakon'
  | 'restoran'

export type Project = {
  id: ProjectId
  number: string
  technologies: string[]
  /** Optional external URL — leave empty when not available */
  href?: string
  image: string
}

export const projects: Project[] = [
  {
    id: 'antiApk',
    number: '01',
    technologies: ['Python', 'Aiogram', 'Telegram Bot'],
    href: '',
    image: '/images/project-antiapk.svg',
  },
  {
    id: 'shazam',
    number: '02',
    technologies: ['Python', 'Aiogram', 'FastAPI', 'Docker'],
    href: 'https://github.com/mirzarahimdev/Shazam_Bot',
    image: '/images/project-shazam.svg',
  },
  {
    id: 'myController',
    number: '03',
    technologies: ['Expo', 'React Native', 'TypeScript'],
    href: 'https://github.com/mirzarahimdev/MY_controller',
    image: '/images/project-controller.svg',
  },
  {
    id: 'emakon',
    number: '04',
    technologies: ['Web Technologies', 'Maps API'],
    href: '',
    image: '/images/project-emakon.svg',
  },
  {
    id: 'restoran',
    number: '05',
    technologies: ['React', 'TypeScript', 'Python', 'FastAPI'],
    href: 'https://github.com/mirzarahimdev/Restoran_web',
    image: '/images/project-restoran.svg',
  },
]

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id)
}
