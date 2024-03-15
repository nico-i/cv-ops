import type { CollectionByLocale } from "@util/types/CollectionByLocale";
import { Locale } from "@util/types/Locale";
import type { LocalizedStrapiCollection } from "@util/types/LocalizedStrapiCollection";

export abstract class LocalizedStrapiRepo<T extends LocalizedStrapiCollection> {
  abstract getAll(locale: Locale): Promise<T[]>;

  async getAllLocalized(): Promise<CollectionByLocale<T>[]> {
    const locales = Object.values(Locale);

    let allItemsByLocale: Record<Locale, T[]> = locales.reduce(
      (acc, locale) => {
        acc[locale] = [];
        return acc;
      },
      {} as Record<Locale, T[]>
    );

    for (const locale of locales) {
      allItemsByLocale[locale] = await this.getAll(locale);
    }

    return allItemsByLocale.en.map((_, i) => {
      const itemsByLocale: Partial<Record<Locale, T>> = {};
      for (const locale of locales) {
        itemsByLocale[locale as Locale] =
          allItemsByLocale[locale as Locale][i]!;
      }
      return itemsByLocale;
    });
  }
}
