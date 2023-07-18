import { ruTranslation } from './locales/ru/main';
import { enTranslation } from './locales/en/main';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    ru: {
        translation: ruTranslation
    },
    en: {
        translation:  enTranslation
    }
};


i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",
        keySeparator: false,
        debug: true,
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },

    });

export default i18n;

