import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [`${process.env.STRAPI_URL}`]: {
        headers: {
          Authorization: `bearer ${process.env.STRAPI_API_TOKEN}`,
        },
      },
    },
  ],
  documents: "src/**/*.ts",
  generates: {
    "src/__generated__/gql.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};
export default config;
