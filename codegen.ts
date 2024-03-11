import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.STRAPI_URL}/graphql`]: {
        headers: {
          Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    },
  ],
  generates: {
    "src/__generated__/gql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ]
    },
  },
};
export default config;
