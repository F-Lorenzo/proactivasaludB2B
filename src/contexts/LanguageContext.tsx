'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'es' | 'en' | 'pt'

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
  language: Language
  setLanguage: (value: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE)

  useEffect(() => {
    const resolved = readCookie() ?? readLocalStorage() ?? DEFAULT_LANGUAGE
    setLanguageState(resolved)
    writeCookie(resolved)
    writeLocalStorage(resolved)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  function setLanguage(value: Language) {
    setLanguageState(value)
    writeLocalStorage(value)
    writeCookie(value)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
