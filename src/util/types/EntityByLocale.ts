import type { Locale } from "@util/types/Locale";
import type { LocalizedStrapiEntity } from "@util/types/LocalizedStrapiEntity";

export type EntityByLocale<T extends LocalizedStrapiEntity> = Partial<
  Record<Locale, T>
>;
