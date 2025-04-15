"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { Locale, getTranslations } from "@/i18n/config";

type TranslationContextType = {
  translations: Record<string, string>;
  lang: Locale;
  setLang: (locale: Locale) => void;
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({
  children,
  initialLocale,
}: {
  children: React.ReactNode;
  initialLocale: Locale;
}) {
  const [lang, setLang] = useState<Locale>(initialLocale);
  const [translations, setTranslations] = useState<Record<string, string>>({});

  useEffect(() => {
    async function loadTranslations() {
      const loadedTranslations = await getTranslations(lang);
      setTranslations(loadedTranslations);
    }
    loadTranslations();
  }, [lang]);

  return (
    <TranslationContext.Provider value={{ translations, lang, setLang }}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslations() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error("useTranslations must be used within a TranslationProvider");
  }
  return context;
}