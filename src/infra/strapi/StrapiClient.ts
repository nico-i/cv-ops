import type { StrapiRes } from "@infra/strapi";

export class StrapiClient {
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
