import type { Query } from "@/__generated__/gql";
import { Locale } from "@/lib/types/Locale";
import type { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
import { NodeHtmlMarkdown } from "node-html-markdown";

export async function fetchSvgHtml(url: string): Promise<string> {
  const fetchedHtml = await fetch(url).then((res) => res.text());
  const svgWithRemovedTitle = fetchedHtml.replace(/<title>.*<\/title>/, "");

  return svgWithRemovedTitle;
}

export function parseMdBulletListToHtml(resString: string): string[] {
  let resStringNoPrefix = resString.replaceAll("- ", "");

  return resStringNoPrefix.split("\n").map((liStr) => {
    const mdStr = NodeHtmlMarkdown.translate(liStr);
    return mdStr.toString();
  });
}

export async function fetchCollectionQuery<
  Q extends Query,
  T extends LocalizedStrapiEntity
>(
  CollectionClass: {
    readonly QUERY: string;
    fromQuery(res: Q): Promise<T | T[]> | T | T[];
  },
  locale: Locale
): Promise<T[]> {
  const res = await fetch(`${import.meta.env.STRAPI_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${import.meta.env.STRAPI_API_TOKEN}`,
    },
    body: JSON.stringify({
      query: CollectionClass.QUERY,
      variables: {
        locale,
      },
    }),
  });
  const { data } = await res.json();
  const parsedCollection = await CollectionClass.fromQuery(data);
  if (Array.isArray(parsedCollection)) {
    return parsedCollection;
  }
  return [parsedCollection];
}
