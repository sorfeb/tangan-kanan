export const defaultLocale = 'en';
export const locales = ['en', 'id'];

export type Locale = (typeof locales)[number];

export function getTranslations(locale: Locale) {
  return import(`./locales/${locale}.json`).then((module) => module.default);
}