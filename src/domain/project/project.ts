import type { Skill } from "@/domain/skill";
import type { StrapiBulletList } from "@/lib/DTOs/StrapiBulletList";
import type { StrapiImage } from "@/lib/DTOs/StrapiImage";
import type { StrapiLink } from "@/lib/DTOs/StrapiLink";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export class Project extends LocalizedStrapiEntity {
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
    public headerImage?: StrapiImage,
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
