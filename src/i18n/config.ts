export const defaultLocale = 'en';
export const locales = ['en', 'id'] as const;

export type Locale = (typeof locales)[number];

export async function getTranslations(locale: Locale) {
  try {
    if (!locales.includes(locale)) {
      console.warn(`Invalid locale: ${locale}, falling back to ${defaultLocale}`);
      locale = defaultLocale;
    }
    
    const translations = await import(`./locales/${locale}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}:`, error);
    const defaultTranslations = await import(`./locales/${defaultLocale}.json`);
    return defaultTranslations.default;
  }
}