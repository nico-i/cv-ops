import type { RawStrapiCollection, StrapiRes } from "@infra/Strapi";
import type { Locale } from "@util/Locale";

export interface StrapiCollection {
  [key: string]: any;
  fromRawCollection(
    rawCollection: RawStrapiCollection
  ): Omit<StrapiCollection, "fromApiRes">;
}

type L10nItem<
  T extends {
    locale: Locale;
  }
> = {
  [key in keyof T]: T[key];
};

export abstract class LocalizedCollection implements StrapiCollection {
  abstract locale: Locale;

  private _l10n: Partial<Record<Locale, L10nItem<this>>> = {};

  constructor(strapiRes: StrapiRes) {
    const initialCollectionItem = this.fromRawCollection(strapiRes.data);

    const localizations = strapiRes.data.attributes.localizations;

    if (!localizations) {
      this._l10n[initialCollectionItem.locale] = initialCollectionItem;
    }

    localizations?.data.forEach((loc: RawStrapiCollection) => {
      const l10nItem = this.fromRawCollection(loc);
      if (!("locale" in l10nItem)) {
        return;
      }
      this.setUndefinedFields(l10nItem, initialCollectionItem);
      this._l10n[l10nItem.locale] = l10nItem;
    });
  }

  abstract fromRawCollection(
    rawCollection: RawStrapiCollection
  ): L10nItem<this>;

  private setUndefinedFields(
    newInstanceRef: L10nItem<this>,
    fallBackRef: L10nItem<this>
  ): void {
    for (const key in newInstanceRef) {
      if (fallBackRef.hasOwnProperty(key) && !newInstanceRef[key]) {
        newInstanceRef[key] = fallBackRef[key];
      }
    }
  }

  public getTranslated(locale: Locale): L10nItem<this> {
    const translatedItem = this._l10n[locale];
    if (!translatedItem) {
      throw new Error(`No translation found for locale ${locale}`);
    }
    return translatedItem;
  }
}
