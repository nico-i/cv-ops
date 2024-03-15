import type { Locale } from "@util/Locale";

export interface LocalizedCollection {
  locale: Locale;
}

export type CollectionByLocale<T> = Partial<Record<Locale, T>>;
