import type { RawStrapiCollection } from "@infra/strapi";

export class StrapiDoc {
  public url;
  public size: number;

  constructor(rawCollection: RawStrapiCollection) {
    const { url, size } = rawCollection.attributes;
    this.url = url;
    this.size = size;
  }
}
