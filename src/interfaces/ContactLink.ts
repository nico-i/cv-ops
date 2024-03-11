import {
  StrapiCollectionFactory,
  type RawStrapiCollection,
} from "@infra/strapi";
import { StrapiSvg } from "@interfaces/StrapiSvg";

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
