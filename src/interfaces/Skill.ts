import { StrapiSvg } from "@interfaces/StrapiSvg";
import type { Locale } from "@util/Locale";
import { LocalizedCollection } from "@util/StrapiCollection";

export class Skill extends LocalizedCollection {
  readonly endpoint = "skills";

  id: number;
  summary: string;
  locale: Locale;
  name: string;
  proficiency: number;
  priority?: number;
  url: string;
  svg?: StrapiSvg;

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
