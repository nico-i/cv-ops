import type { StrapiCollection } from "@util/StrapiCollection";

export type RawStrapiCollection = {
  id: number;
  attributes: {
    [key: string]: any;
  };
};

export type StrapiRes = {
  data: RawStrapiCollection & {
    attributes: {
      localizations?: {
        data: RawStrapiCollection[];
      };
    };
  };
};

export enum StrapiEndpoint {
  PROJECTS = "projects",
  SKILLS = "skills",
  CONTACT_LINKS = "contact-links",
}

export class Strapi {
  /**
   * Fetches data from the Strapi API
   * @returns
   */
  public static async fetchApi<T extends StrapiCollection>(
    CollectionClass: new (strapiRes: StrapiRes) => T,
    endpoint: StrapiEndpoint
  ): Promise<T[]> {
    const url = new URL(
      `${import.meta.env.STRAPI_URL}/api/${endpoint}?populate=*`
    );

    const res = await fetch(url.toString(), {
      headers: [
        ["Authorization", "bearer " + import.meta.env.STRAPI_API_TOKEN],
      ],
    });

    let resObj: { data: RawStrapiCollection[] } = await res.json();
    return resObj.data.map(
      (collectionApiRes) => new CollectionClass({ data: collectionApiRes })
    );
  }
}
