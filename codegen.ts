import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      [`${import.meta.env.STRAPI_URL}/graphql`]: {
        headers: {
          Authorization: `bearer ${import.meta.env.STRAPI_API_TOKEN}`,
        },
      },
    },
  ],
  documents: "src/lib/domain/*.ts",
  generates: {
    "src/__generated__/gql.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
  },
};
export default config;
