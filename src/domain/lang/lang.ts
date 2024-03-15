import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiEntity } from "@util/types/LocalizedStrapiEntity";

export class Lang extends LocalizedStrapiEntity {
  constructor(
    id: string,
    locale: Locale,
    public name: string,
    public level: string,
    public docUrl?: string
  ) {
    super(id, locale);
  }
}
