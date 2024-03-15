import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export class Interest extends LocalizedStrapiEntity {
  constructor(id: string, locale: Locale, public name: string) {
    super(id, locale);
  }
}
