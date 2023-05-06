import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import esTranslation from './lang/es.json';
import enTranslation from './lang/en.json';

i18n.use(initReactI18next).init({
    lng: 'en', // aquí se define el idioma por defecto
    fallbackLng: 'en', // aquí se define el idioma de fallback en caso de que el idioma del usuario no esté disponible
    resources: {
      es: {
        translation: esTranslation
      },
      en: {
        translation: enTranslation
      }
    }
  });
  
  export default i18n;
