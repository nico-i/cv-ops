import type { Locale } from "@/lib/types/Locale";
import commonDe from "./locales/de/common.json";
import commonEn from "./locales/en/common.json";

type Translations = {
  [key: string]: string | Translations;
};

const commonByLocale: Record<Locale, Translations> = {
  de: commonDe,
  en: commonEn,
};

export function useTranslation(locale: Locale) {
  const translations = commonByLocale[locale];
  return {
    t: (key: string): string => {
      const path = key.split(".");
      let current = translations;
      for (const part of path) {
        if (typeof current[part] === "string") {
          const translation = current[part];
          if (typeof translation === "string") {
            return translation;
          }
          throw new Error(`Translation not found for key: ${key}`);
        }
        current = current[part] as Translations;
      }
      throw new Error(`Translation not found for key: ${key}`);
    },
  };
}
