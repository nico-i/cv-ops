import type { RawStrapiCollection } from "@infra/strapi";

export interface StrapiCollection<T> {
  readonly ENDPOINT: string;
  readonly QUERY?: string;
  parseFromRawCollection(rawCollection: RawStrapiCollection): T;
}
