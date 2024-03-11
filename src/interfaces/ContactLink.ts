import type { RawStrapiCollection, StrapiRes } from "@infra/Strapi";
import { StrapiSvg } from "@interfaces/StrapiSvg";
import type { StrapiCollection } from "@util/StrapiCollection";

export class ContactLink implements StrapiCollection {
  readonly username: string;
  readonly url: string;
  readonly svg: StrapiSvg;

  constructor(strapiRes: StrapiRes) {
    const { username, url, svg } = this.fromRawCollection(strapiRes.data);
    this.username = username;
    this.url = url;
    this.svg = svg;
  }

  fromRawCollection(apiRes: RawStrapiCollection) {
    const { username, url, svg } = apiRes.attributes;
    const { url: svgUrl } = svg?.data?.attributes || {};
    return {
      username,
      url,
      svg: new StrapiSvg(svgUrl),
    };
  }
}
