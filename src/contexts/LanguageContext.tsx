'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { dictionaries, type Language, type Dictionary } from '@/lib/i18n'

export type { Language } from '@/lib/i18n'

const COOKIE_NAME = 'ps_lang'
const STORAGE_KEY = 'ps_lang'
const DEFAULT_LANGUAGE: Language = 'es'

function isLanguage(value: string | null | undefined): value is Language {
  return value === 'es' || value === 'en' || value === 'pt'
}

function readCookie(): Language | null {
  if (typeof document === 'undefined') return null
  const match = document.cookie.match(/(?:^|;\s*)ps_lang=([^;]*)/)
  const value = match?.[1]
  return isLanguage(value) ? value : null
}

function writeCookie(value: Language) {
  document.cookie =
    COOKIE_NAME +
    '=' +
    value +
    '; path=/; max-age=31536000; SameSite=Lax' +
    (location.hostname.endsWith('proactivasalud.com') ? '; domain=.proactivasalud.com' : '')
}

function readLocalStorage(): Language | null {
  if (typeof window === 'undefined') return null
  const value = window.localStorage.getItem(STORAGE_KEY)
  return isLanguage(value) ? value : null
}

function writeLocalStorage(value: Language) {
  window.localStorage.setItem(STORAGE_KEY, value)
}

type LanguageContextValue = {
  lang: Language
  setLang: (value: Language) => void
  t: Dictionary
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(DEFAULT_LANGUAGE)

  useEffect(() => {
    // Cookie/localStorage only exist in the browser, so the real language can't be
    // read during SSR — this one-time sync on mount is the only way to pick it up.
    const resolved = readCookie() ?? readLocalStorage() ?? DEFAULT_LANGUAGE
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLangState(resolved)
    writeCookie(resolved)
    writeLocalStorage(resolved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function setLang(value: Language) {
    setLangState(value)
    writeLocalStorage(value)
    writeCookie(value)
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
