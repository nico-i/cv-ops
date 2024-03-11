import type { RawStrapiCollection } from "@infra/strapi";

export interface StrapiCollection<T> {
  readonly ENDPOINT: string;
  parseFromRawCollection(rawCollection: RawStrapiCollection): T;
}
