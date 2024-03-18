import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export class Xp extends LocalizedStrapiEntity {
  public start: Date;
  public end?: Date;

  constructor(
    id: string,
    locale: Locale,
    public position: string,
    public company: string,
    start: string,
    public infoListItems: string[],
    end?: string,
    public url?: string
  ) {
    super(id, locale);
    this.start = new Date(start);
    if (end) this.end = new Date(end);
  }
}
