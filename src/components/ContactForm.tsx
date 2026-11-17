import { ArrowRight, LoaderCircle } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import {
  contactFormEndpoint,
  telegramUsername,
} from '../config/socialLinks'
import { useLanguage } from '../i18n/LanguageContext'

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

type Status = 'idle' | 'loading' | 'success' | 'error'

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function buildTelegramMessage(values: FormState) {
  return [
    'New portfolio message',
    '',
    `Name: ${values.name.trim()}`,
    `Email: ${values.email.trim()}`,
    '',
    values.message.trim(),
  ].join('\n')
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

export function ContactForm() {
  const { t } = useLanguage()
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  function validate(values: FormState): FormErrors {
    const next: FormErrors = {}
    if (!values.name.trim()) next.name = t.contact.form.required
    if (!values.email.trim()) next.email = t.contact.form.required
    else if (!emailPattern.test(values.email.trim())) {
      next.email = t.contact.form.invalidEmail
    }
    if (!values.message.trim()) next.message = t.contact.form.required
    return next
  }

  async function deliverViaTelegram(values: FormState) {
    const text = buildTelegramMessage(values)
    const url = `https://t.me/${telegramUsername}?text=${encodeURIComponent(text)}`
    // Open first (same user gesture) so popup blockers do not block Telegram.
    const popup = window.open(url, '_blank', 'noopener,noreferrer')
    const copied = await copyText(text)
    return { copied, opened: Boolean(popup) }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(form)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('loading')

    try {
      if (contactFormEndpoint) {
        const response = await fetch(contactFormEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        })
        if (!response.ok) throw new Error('Request failed')
      } else {
        const { opened, copied } = await deliverViaTelegram(form)
        if (!opened && !copied) throw new Error('Telegram delivery failed')
      }

      setStatus('success')
      setForm({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-6 border border-border bg-card p-6 md:p-8"
    >
      <div>
        <label htmlFor="contact-name" className="label-mono mb-3 block">
          {t.contact.form.name}
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={form.name}
          onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
          placeholder={t.contact.form.namePlaceholder}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className="w-full border-b border-border bg-transparent py-3 text-text outline-none transition-colors placeholder:text-text-secondary/50 focus:border-accent"
        />
        {errors.name ? (
          <p id="contact-name-error" className="mt-2 text-xs text-red-400">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-email" className="label-mono mb-3 block">
          {t.contact.form.email}
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
          placeholder={t.contact.form.emailPlaceholder}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className="w-full border-b border-border bg-transparent py-3 text-text outline-none transition-colors placeholder:text-text-secondary/50 focus:border-accent"
        />
        {errors.email ? (
          <p id="contact-email-error" className="mt-2 text-xs text-red-400">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div>
        <label htmlFor="contact-message" className="label-mono mb-3 block">
          {t.contact.form.message}
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={form.message}
          onChange={(e) =>
            setForm((prev) => ({ ...prev, message: e.target.value }))
          }
          placeholder={t.contact.form.messagePlaceholder}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className="w-full resize-y border-b border-border bg-transparent py-3 text-text outline-none transition-colors placeholder:text-text-secondary/50 focus:border-accent"
        />
        {errors.message ? (
          <p id="contact-message-error" className="mt-2 text-xs text-red-400">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="group inline-flex items-center gap-3 border border-border bg-text px-6 py-3 text-sm font-medium text-bg transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'loading' ? (
          <>
            <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
            {t.contact.form.sending}
          </>
        ) : (
          <>
            {t.contact.form.submit}
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </>
        )}
      </button>

      {status === 'success' || status === 'error' ? (
        <p
          role="status"
          className={`text-sm leading-relaxed ${
            status === 'error' ? 'text-red-400' : 'text-text-secondary'
          }`}
        >
          {status === 'success' ? t.contact.form.success : t.contact.form.error}
        </p>
      ) : null}
    </form>
  )
}
