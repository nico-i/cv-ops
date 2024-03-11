import type { Locale } from "@util/Locale";

export type LocalizedCollection<T> = Partial<Record<Locale, T>>;
