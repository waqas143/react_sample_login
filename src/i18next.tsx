import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "enter your email": "Enter your email",
        "enter your password": "Enter your password",
      },
    },
    ar: {
      translation: {
        "enter your email": "أدخل بريدك الإلكتروني",
        "enter your password": "ادخل رقمك السري",
      },
    },
  },
  lng: "ar",
  fallbackLng: "ar",

  interpolation: {
    escapeValue: false,
  },
});
export default i18n;
