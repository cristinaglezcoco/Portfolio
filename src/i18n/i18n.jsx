// i18n.jsx
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa tus archivos de traducción
import translationEN from '../languages/English/translation.json';
import translationES from '../languages/Spanish/translation.json';
import translationDE from '../languages/German/translation.json';

// Configuración de i18next
i18n
  .use(initReactI18next) // Pasa la instancia de i18next a react-i18next.
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      es: {
        translation: translationES
      },
      de: {
        translation: translationDE
      }
    },
    lng: 'en', // Idioma por defecto
    fallbackLng: 'en', // Idioma de reserva
    interpolation: {
      escapeValue: false // react ya hace escaping
    }
  });

export default i18n;
