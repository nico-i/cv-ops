import type { RawStrapiCollection, StrapiRes } from "@infra/Strapi";
import { StrapiSvg } from "@interfaces/StrapiSvg";
import type { Locale } from "@util/Locale";
import { LocalizedCollection } from "@util/StrapiCollection";

export class Skill extends LocalizedCollection {
  id: number;
  summary: string;
  locale: Locale;
  name: string;
  proficiency: number;
  priority?: number;
  url: string;
  svg?: StrapiSvg;

  constructor(strapiRes: StrapiRes) {
    super(strapiRes);
    const { id, summary, locale, name, proficiency, priority, url, svg } =
      this.fromRawCollection(strapiRes.data);
    this.id = id;
    this.summary = summary;
    this.locale = locale;
    this.name = name;
    this.proficiency = proficiency;
    this.priority = priority;
    this.url = url;
    this.svg = svg;
  }

  override fromRawCollection(rawCollection: RawStrapiCollection) {
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
