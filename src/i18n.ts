import enTrans from '../messages/en.json'
import ptTrans from '../messages/pt.json'

import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: { translation: enTrans },
  pt: { translation: ptTrans },
}

type LangProps = { value: keyof typeof resources; label: string }

export const langs: LangProps[] = [
  { value: 'pt', label: '🇧🇷 Português' },
  { value: 'en', label: '🇺🇸 English' },
]

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // debug: true,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  })

export default i18n
