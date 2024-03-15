import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiCollection } from "@util/types/LocalizedStrapiCollection";

export class Interest extends LocalizedStrapiCollection {
  constructor(id: string, locale: Locale, public name: string) {
    super(id, locale);
  }
}
