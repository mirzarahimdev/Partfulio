/**
 * Editable social / contact URLs.
 */
export const socialLinks = {
  github: {
    label: 'GitHub',
    href: 'https://github.com/mirzarahimdev',
    configured: true,
  },
  telegram: {
    label: 'Telegram',
    href: 'https://t.me/mirzarakhimpy',
    configured: true,
  },
  instagram: {
    label: 'Instagram',
    href: 'https://instagram.com/mirzarakhim.dev',
    configured: true,
  },
} as const

export type SocialKey = keyof typeof socialLinks

/** Telegram username used by the contact form (without @) */
export const telegramUsername = 'mirzarakhimpy'

/**
 * Optional API endpoint for later email/backend integration.
 * Leave empty to use Telegram delivery (works without a backend).
 */
export const contactFormEndpoint = ''
