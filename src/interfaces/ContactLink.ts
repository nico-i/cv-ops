import type { RawStrapiCollection } from "@infra/Strapi";
import { StrapiSvg } from "@interfaces/StrapiSvg";
import { StrapiCollectionFactory } from "@util/StrapiCollectionFactory";

export interface ContactLink {
  username: string;
  url: string;
  svg: StrapiSvg;
}

export class ContactLinkFactory extends StrapiCollectionFactory<ContactLink> {
  readonly ENDPOINT = "contact-links";

  parseFromRawCollection(rawCollection: RawStrapiCollection): ContactLink {
    const { username, url, svg } = rawCollection.attributes;
    const { url: svgUrl } = svg?.data?.attributes || {};
    return {
      username,
      url,
      svg: new StrapiSvg(svgUrl),
    };
  }
}
