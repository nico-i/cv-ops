import type { Query } from "@/__generated__/gql";
import { Locale } from "@/lib/types/Locale";
import type { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
import { markdown } from "@astropub/md";

const fetchedSvgByName: Record<string, string> = {};

export async function fetchSvgHtml(url: string): Promise<string> {
  // last part of url is the name of the svg
  const svgName = url.split("/").pop()!;
  const cachedSvg = fetchedSvgByName[svgName];
  if (!cachedSvg) {
    // refetch svg if not in cache or if it's been more than an hour
    const fetchedHtml = await fetch(url)
      .then((res) => res.text())
      .catch(() => {
        console.error(`Failed to fetch ${url}`);
        return "";
      });

    if (fetchedHtml === "") {
      return "";
    }

    // TODO: Remove <title> in CMS instead of here
    const svgWithRemovedTitle = fetchedHtml.replace(/<title>.*<\/title>/, "");

    fetchedSvgByName[svgName] = svgWithRemovedTitle;

    return svgWithRemovedTitle;
  }

  return cachedSvg;
}

export async function parseMdBulletListToHtml(
  resString: string
): Promise<string[]> {
  let resStringNoPrefix = resString.replaceAll("- ", "");

  return await Promise.all(
    resStringNoPrefix.split("\n").map(async (liStr) => {
      const mdStr = await markdown(liStr);
      return mdStr.toString();
    })
  );
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
