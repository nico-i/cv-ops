import { StrapiSvg } from "@interfaces/StrapiSvg";
import { Strapi } from "@lib/Strapi";
import type { Locale } from "@util/Locale";
import { LocalizedCollection } from "@util/LocalizedCollection";

export interface ISkill {
  id: number;
  summary: string;
  locale: Locale;
  name: string;
  proficiency: number;
  priority?: number;
  url: string;
  svg?: StrapiSvg;
}

export class Skill extends LocalizedCollection<ISkill> {
  constructor(strapiApiResData: any) {
    super((strapiApiResData: any) => {
      const { locale, name, priority, proficiency, summary, url, svg } =
        strapiApiResData.attributes;

      const { url: svgUrl } = svg?.data?.attributes || {};

      return {
        id: strapiApiResData.id,
        locale,
        name,
        priority,
        ...(proficiency && { proficiency }),
        summary,
        url,
        ...(svgUrl && { svg: new StrapiSvg(svgUrl) }),
      };
    }, strapiApiResData);
  }
}

export const fetchSkills = async () =>
  (
    await Strapi.fetchApi<Skill[]>({
      endpoint: "skills",
      wrappedByKey: "data",
    })
  ).map((rawSkill) => new Skill(rawSkill));
