export type RawStrapiCollection = {
  id: number;
  attributes: {
    [key: string]: any;
  };
};

export type StrapiRes = {
  data: (RawStrapiCollection & {
    attributes: {
      localizations?: {
        data: RawStrapiCollection[];
      };
    };
  })[];
};

export class Strapi {
  /**
   * Fetches data from the Strapi API
   * @returns
   */
  public static async fetchApi(endpoint: string): Promise<StrapiRes> {
    const url = new URL(
      `${import.meta.env.STRAPI_URL}/api/${endpoint}?populate=*`
    );

    const res = await fetch(url.toString(), {
      headers: [
        ["Authorization", "bearer " + import.meta.env.STRAPI_API_TOKEN],
      ],
    });

    return await res.json();
  }
}
