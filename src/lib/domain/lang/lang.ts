import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export class Lang extends LocalizedStrapiEntity {
  constructor(
    id: string,
    locale: Locale,
    public name: string,
    public svgHtml: string,
    public level: string,
    public docUrl?: string
  ) {
    super(id, locale);
  }
}
