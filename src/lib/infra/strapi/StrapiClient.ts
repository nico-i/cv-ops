import { GraphQLClient } from "graphql-request";
import { getSdk } from "src/__generated__/gql";

if (!import.meta.env.STRAPI_URL) {
  throw new Error("STRAPI_URL is not defined");
}

if (!import.meta.env.STRAPI_API_TOKEN) {
  throw new Error("STRAPI_API_TOKEN is not defined");
}

const gqlClient = new GraphQLClient(import.meta.env.STRAPI_URL + "/graphql", {
  headers: {
    Authorization: `bearer ${import.meta.env.STRAPI_API_TOKEN}`,
  },
});

export const StrapiClient = getSdk(gqlClient);
