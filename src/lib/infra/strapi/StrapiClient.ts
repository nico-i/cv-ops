import { GraphQLClient } from "graphql-request";
import { getSdk } from "src/__generated__/gql";

const gqlClient = new GraphQLClient(import.meta.env.STRAPI_URL + "/graphql", {
  headers: {
    Authorization: `bearer ${import.meta.env.STRAPI_API_TOKEN}`,
  },
});

export const StrapiClient = getSdk(gqlClient);
