import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { getLanguage } from 'utils/cookie';
import { DEFAULT_LANGUAGE, langEn, langVi } from './constant';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: DEFAULT_LANGUAGE,
    lng: DEFAULT_LANGUAGE,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: langEn,
      },
      vi: {
        translation: langVi,
      },
    },
  });

i18n.changeLanguage(getLanguage());
export default i18n;
