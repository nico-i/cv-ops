import { StrapiClient } from "@nico-i/cv-data/dist/infrastructure/interfaces";

export const strapiClient = new StrapiClient(
  import.meta.env.STRAPI_URL,
  import.meta.env.STRAPI_API_TOKEN
);
