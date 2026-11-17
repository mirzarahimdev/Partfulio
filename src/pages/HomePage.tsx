import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { About } from '../sections/About'
import { Contact } from '../sections/Contact'
import { Experience } from '../sections/Experience'
import { Hero } from '../sections/Hero'
import { Projects } from '../sections/Projects'
import { Skills } from '../sections/Skills'

export function HomePage() {
  const location = useLocation()

  useEffect(() => {
    if (!location.hash) return
    const id = location.hash.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    const timer = window.setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return () => window.clearTimeout(timer)
  }, [location.hash])

  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
