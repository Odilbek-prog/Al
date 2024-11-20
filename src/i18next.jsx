import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import I18NextHttpBackend from "i18next-http-backend";

import enTranslation from "../public/locales/en.json";
import ruTranslation from "../public/locales/ru.json";

i18next
  .use(I18NextHttpBackend) // Backendni ishlatish
  .use(LanguageDetector) // Tillarni avtomatik aniqlash
  .use(initReactI18next) // React integratsiyasi
  .init({
    fallbackLng: "en", // Default til
    debug: true, // Konsolda xatolarni tekshirish uchun
    resources: {
      en: { translation: enTranslation },
      ru: { translation: ruTranslation },
    },
  });

export default i18next; // To'g'ri eksport qilish
