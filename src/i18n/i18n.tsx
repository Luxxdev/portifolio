import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enJson from './translations/en.json'
import ptbrJson from './translations/ptbr.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'pt',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enJson,
    pt: ptbrJson,
  },
})
