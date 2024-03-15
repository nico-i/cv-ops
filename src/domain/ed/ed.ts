import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiEntity } from "@util/types/LocalizedStrapiEntity";

export class Ed extends LocalizedStrapiEntity {
  public start: Date;
  public end?: Date;

  constructor(
    id: string,
    locale: Locale,
    public institute: string,
    public degree: string,
    start: string,
    public grade: string,
    public url?: string,
    public docUrl?: string,
    end?: string
  ) {
    super(id, locale);
    this.start = new Date(start);
    if (end) this.end = new Date(end);
  }
}
