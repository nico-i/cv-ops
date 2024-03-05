import { StrapiSvg } from "@interfaces/StrapiSvg";
import { Strapi } from "@lib/Strapi";

export class ContactLink {
  readonly username: string;
  readonly url: string;
  readonly svg: StrapiSvg;

  constructor(strapiApiResData: any) {
    const { username, svg, url } = strapiApiResData.attributes;
    this.username = username;
    this.url = url;
    this.svg = new StrapiSvg(svg.data.attributes.url);
  }
}

export const fetchContactLinks = async () =>
  (
    await Strapi.fetchApi<ContactLink[]>({
      endpoint: "contact-links",
      wrappedByKey: "data",
    })
  ).map((rawCLink) => {
    return new ContactLink(rawCLink);
  });
