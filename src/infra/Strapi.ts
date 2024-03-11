import type { StrapiCollection } from "@util/StrapiCollection";

export type StrapiCollectionApiRes = {
  data: {
    id: number;
    attributes: { [key: string]: any };
    localizations?: {
      data: Omit<StrapiCollectionApiRes, "localizations">[];
    };
  };
};

export class Strapi {
  /**
   * Fetches data from the Strapi API
   * @returns
   */
  public static async fetchApi<T extends StrapiCollection>(
    CollectionClass: { new (...args: any[]): T },
  ): Promise<T[]> {
    const url = new URL(
      `${import.meta.env.STRAPI_URL}/api/${CollectionClass.endpoint}?populate=*`
    );

    const res = await fetch(url.toString(), {
      headers: [
        ["Authorization", "bearer " + import.meta.env.STRAPI_API_TOKEN],
      ],
    });
    let resObj: { data: StrapiCollectionApiRes[] } = await res.json();

    return resObj.data.map(
      (collectionApiRes) => new CollectionClass(collectionApiRes)
    );
  }
}
