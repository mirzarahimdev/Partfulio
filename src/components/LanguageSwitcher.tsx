import { localeLabels, locales, type Locale } from '../i18n/translations'
import { useLanguage } from '../i18n/LanguageContext'

type LanguageSwitcherProps = {
  className?: string
}

export function LanguageSwitcher({ className = '' }: LanguageSwitcherProps) {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      className={`flex items-center gap-2 text-xs tracking-[0.16em] ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((code, index) => (
        <span key={code} className="flex items-center gap-2">
          {index > 0 ? (
            <span className="text-border" aria-hidden="true">
              /
            </span>
          ) : null}
          <button
            type="button"
            onClick={() => setLocale(code as Locale)}
            className={`transition-colors duration-300 ${
              locale === code
                ? 'text-text'
                : 'text-text-secondary hover:text-text'
            }`}
            aria-pressed={locale === code}
          >
            {localeLabels[code]}
          </button>
        </span>
      ))}
    </div>
  )
}
