import type { Locale } from "@/lib/types/Locale";
import type { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export type EntityByLocale<T extends LocalizedStrapiEntity> = Record<Locale, T>;
