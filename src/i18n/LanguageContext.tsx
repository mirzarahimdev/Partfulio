import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  defaultLocale,
  locales,
  translations,
  type Locale,
} from './translations'

const STORAGE_KEY = 'mirzarahim-locale'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (typeof translations)[Locale]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

function isLocale(value: string | null): value is Locale {
  return locales.includes(value as Locale)
}

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return defaultLocale
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return isLocale(stored) ? stored : defaultLocale
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      t: translations[locale],
    }),
    [locale, setLocale],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
