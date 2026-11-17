import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  once = true,
}: ScrollRevealProps) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const, delay }}
    >
      {children}
    </motion.div>
  )
}
