import type { EntityByLocale } from "@util/types/EntityByLocale";
import { Locale } from "@util/types/Locale";
import type { LocalizedStrapiEntity } from "@util/types/LocalizedStrapiEntity";

export abstract class LocalizedStrapiRepo<T extends LocalizedStrapiEntity> {
  abstract getAll(locale: Locale): Promise<T[]>;

  async getAllLocalized(): Promise<EntityByLocale<T>[]> {
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
