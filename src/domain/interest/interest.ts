import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiEntity } from "@util/types/LocalizedStrapiEntity";

export class Interest extends LocalizedStrapiEntity {
  constructor(id: string, locale: Locale, public name: string) {
    super(id, locale);
  }
}
