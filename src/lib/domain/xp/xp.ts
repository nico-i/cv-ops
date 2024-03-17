import type { StrapiBulletList } from "@/lib/DTOs/StrapiBulletList";
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
    public info: StrapiBulletList,
    end?: string,
    public url?: string
  ) {
    super(id, locale);
    this.start = new Date(start);
    if (end) this.end = new Date(end);
  }
}
