import type { StrapiSvg } from "@util/DTOs/StrapiSvg";
import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiEntity } from "@util/types/LocalizedStrapiEntity";

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
