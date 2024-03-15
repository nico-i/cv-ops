import type { StrapiSvg } from "@util/DTOs/StrapiSvg";
import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiCollection } from "@util/types/LocalizedStrapiCollection";

export class Skill extends LocalizedStrapiCollection {
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
