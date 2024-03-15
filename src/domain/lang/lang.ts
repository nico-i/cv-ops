import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiCollection } from "@util/types/LocalizedStrapiCollection";

export class Lang extends LocalizedStrapiCollection {
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
