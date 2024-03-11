import type { StrapiCollectionApiRes } from "@infra/Strapi";
import type { Locale } from "./Locale";

export interface StrapiCollection {
  locale?: Locale;
}

export function parseFromApiRes<T extends StrapiCollection>(
  apiRes: StrapiCollectionApiRes
): T {
  return new CollectionClass(apiRes);
}

export abstract class LocalizedCollection implements StrapiCollection {
  private _l10n: Partial<Record<Locale, StrapiCollection>> = {};

  constructor(
    initialCollectionItem: StrapiCollection & { locale: Locale },
    strapiRes: StrapiCollectionApiRes
  ) {
    const localizations = strapiRes.data.localizations;

    if (!localizations) {
      this._l10n[initialCollectionItem.locale] = initialCollectionItem;
    }

    localizations?.data.forEach((loc: StrapiCollectionApiRes) => {
      const l10nItem = this.fromApiRes(loc);
      if (!("locale" in l10nItem)) {
        return;
      }
      this.setUndefinedFields(l10nItem, initialCollectionItem);
      this._l10n[l10nItem.locale] = l10nItem;
    });
  }

  private setUndefinedFields(
    newInstanceRef: StrapiCollection,
    fallBackRef: StrapiCollection
  ): void {
    for (const key in newInstanceRef) {
      if (fallBackRef.hasOwnProperty(key) && !newInstanceRef[key]) {
        newInstanceRef[key] = fallBackRef[key];
      }
    }
  }

  public getTranslated(locale: Locale): StrapiCollection {
    const translatedItem = this._l10n[locale];
    if (!translatedItem) {
      throw new Error(`No translation found for locale ${locale}`);
    }
    return translatedItem;
  }
}
