import { StrapiSvg } from "@domain/StrapiSvg";
import type { RawStrapiCollection } from "@infra/strapi/types/RawStrapiCollection";

interface RawStrapiLink {
  text: string;
  url: string;
  icon?: RawStrapiCollection;
}

export class StrapiLink {
  public text: string;
  public url: string;
  public icon?: StrapiSvg;

  constructor(rawLink: RawStrapiLink) {
    const { text, url, icon } = rawLink;
    this.text = text;
    this.url = url;
    if (icon) {
      this.icon = new StrapiSvg(icon);
    }
  }

  static parseFromList(rawLinks: RawStrapiLink[]): StrapiLink[] {
    return rawLinks.map((rawLink) => new StrapiLink(rawLink));
  }
}
