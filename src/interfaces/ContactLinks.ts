import { StrapiSvg } from "@interfaces/StrapiSvg";

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
