import type { StrapiCollectionApiRes } from "@infra/Strapi";
import { StrapiSvg } from "@interfaces/StrapiSvg";
import type { StrapiCollection } from "@util/StrapiCollection";

export class ContactLink implements StrapiCollection {
  readonly username: string;
  readonly url: string;
  readonly svg: StrapiSvg;

  constructor(apiRes: StrapiCollectionApiRes) {
    const { username, url, svg } = apiRes.data.attributes;
    const { url: svgUrl } = svg?.data?.attributes || {};

    this.username = username;
    this.url = url;
    this.svg = new StrapiSvg(svgUrl);
  }
}
