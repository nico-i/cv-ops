import type { EntityByLocale } from "@/lib/types/EntityByLocale";
import { Locale } from "@/lib/types/Locale";
import type { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
import { markdown } from "@astropub/md";

export async function fetchSvgHtml(url: string): Promise<string> {
  const fetchedHtml = await fetch(url).then((res) => res.text());
  // TODO: Remove <title> in CMS instead of here
  return fetchedHtml.replace(/<title>.*<\/title>/, "");
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

export async function parseAllLocalized<T extends LocalizedStrapiEntity>(
  allItemsByLocale: Record<Locale, T[]>
): Promise<EntityByLocale<T>[]> {
  return allItemsByLocale.en.map((_, i) => {
    const itemsByLocale: Record<Locale, T> = Object.values(Locale).reduce(
      (acc, locale) => {
        acc[locale] = allItemsByLocale[locale][i]!;
        return acc;
      },
      {} as Record<Locale, T>
    );
    return itemsByLocale;
  });
}