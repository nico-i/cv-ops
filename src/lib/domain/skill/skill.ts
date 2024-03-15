import type { StrapiSvg } from "@/lib/DTOs/StrapiSvg";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export class Skill extends LocalizedStrapiEntity {
  constructor(
    id: string,
    locale: Locale,
    public name: string,
    public proficiency: number,
    public summary: string,
    public url: string,
    public svg?: StrapiSvg
  ) {
    super(id, locale);
  }
}
