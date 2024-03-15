import type { RawStrapiCollection } from "@infra/strapi";

export type StrapiRes = {
  data: (RawStrapiCollection & {
    attributes: {
      localizations?: {
        data: RawStrapiCollection[];
      };
    };
  })[];
};
