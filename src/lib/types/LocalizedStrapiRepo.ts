import type { getSdk } from "@/__generated__/gql";
import type { EntityByLocale } from "@/lib/types/EntityByLocale";
import { Locale } from "@/lib/types/Locale";
import type { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export abstract class LocalizedStrapiRepo<T extends LocalizedStrapiEntity> {
  constructor(protected sdk: ReturnType<typeof getSdk>) {}

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
}
