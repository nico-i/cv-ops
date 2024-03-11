import type { RawStrapiCollection } from "@infra/strapi";
import { StrapiSvg } from "@interfaces/StrapiSvg";

export class ProjectLink {
  url: string;
  text: string;
  svg: StrapiSvg;

  constructor(rawLink: RawStrapiCollection) {
    const { url, text, svg } = rawLink.attributes;
    const { url: svgUrl } = svg?.data?.attributes || {};

    this.url = url;
    this.text = text;
    this.svg = new StrapiSvg(svgUrl);
  }
}
