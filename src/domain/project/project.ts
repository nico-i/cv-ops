import type { Skill } from "@domain/skill";
import type { StrapiBulletList } from "@util/DTOs/StrapiBulletList";
import type { StrapiLink } from "@util/DTOs/StrapiLink";
import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiCollection } from "@util/types/LocalizedStrapiCollection";

export class Project extends LocalizedStrapiCollection {
  start: Date;
  end?: Date;

  constructor(
    id: string,
    locale: Locale,
    public title: string,
    public slug: string,
    start: string,
    public tldr: string,
    end?: string,
    public workHours?: number,
    public summary?: StrapiBulletList,
    public demoUrl?: string,
    public links?: StrapiLink[],
    public technologies?: Skill[]
  ) {
    super(id, locale);
    this.start = new Date(start);
    if (end) this.end = new Date(end);
  }
}
