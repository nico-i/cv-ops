import type {
  RawStrapiCollection,
  StrapiCollection,
  StrapiRes,
} from "@infra/strapi";

export abstract class StrapiCollectionFactory<T>
  implements StrapiCollection<T>
{
  abstract readonly ENDPOINT: string;
  abstract parseFromRawCollection(rawCollection: RawStrapiCollection): T;
  parseFromApiRes(strapiResponse: StrapiRes): T[] {
    const { data } = strapiResponse;
    return data.map((rawCollection: RawStrapiCollection): T => {
      return this.parseFromRawCollection(rawCollection);
    });
  }
}
