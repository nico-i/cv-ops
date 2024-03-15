import type { StrapiBulletList } from "@util/DTOs/StrapiBulletList";
import { Locale } from "@util/types/Locale";
import { LocalizedStrapiCollection } from "@util/types/LocalizedStrapiCollection";

export class Xp extends LocalizedStrapiCollection {
  public start: Date;
  public end?: Date;

  constructor(
    id: string,
    locale: Locale,
    public position: string,
    public company: string,
    start: string,
    end?: string,
    public url?: string,
    public info?: StrapiBulletList
  ) {
    super(id, locale);
    this.start = new Date(start);
    if (end) this.end = new Date(end);
  }
}
