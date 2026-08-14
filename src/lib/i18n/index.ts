import { es, type Dictionary } from './es'
import { en } from './en'
import { pt } from './pt'

export type { Dictionary } from './es'

export type Language = 'es' | 'en' | 'pt'

export const dictionaries: Record<Language, Dictionary> = { es, en, pt }
