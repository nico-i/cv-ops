import type { Locale } from "@util/types/Locale";


export type CollectionByLocale<T> = Partial<Record<Locale, T>>;
