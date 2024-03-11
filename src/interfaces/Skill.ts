import {
  LocalizedStrapiCollectionFactory,
  type RawStrapiCollection,
} from "@infra/strapi";
import { StrapiSvg } from "@interfaces/StrapiSvg";
import type { Locale } from "@util/Locale";

export interface Skill {
  id: number;
  summary: string;
  locale: Locale;
  name: string;
  proficiency: number;
  priority?: number;
  url: string;
  svg?: StrapiSvg;
}

export class SkillFactory extends LocalizedStrapiCollectionFactory<Skill> {
  readonly ENDPOINT = "skills";
  parseFromRawCollection(rawCollection: RawStrapiCollection): Skill {
    const { locale, name, priority, proficiency, summary, url, svg } =
      rawCollection.attributes;
    const { url: svgUrl } = svg?.data?.attributes || {};
    return {
      id: rawCollection.id,
      locale,
      name,
      priority,
      ...(proficiency && { proficiency }),
      summary,
      url,
      ...(svgUrl && { svg: new StrapiSvg(svgUrl) }),
    };
  }
}
