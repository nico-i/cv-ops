import type {
  CollectionByLocale,
  RawStrapiCollection,
  StrapiCollection,
  StrapiRes,
} from "@infra/strapi";
import type { Locale } from "@util/Locale";

export abstract class LocalizedStrapiCollectionFactory<
  T extends {
    locale: Locale;
  }
> implements StrapiCollection<T>
{
  private _parseLocalizations<
    T extends {
      locale: Locale;
    }
  >(
    strapiResponse: StrapiRes,
    parseFn: (rawCollection: RawStrapiCollection) => T
  ): CollectionByLocale<T>[] {
    const { data } = strapiResponse;

    return data.map((rawCollectionWithL10n): CollectionByLocale<T> => {
      let l10n: CollectionByLocale<T> = {};

      const initialL10nItem = parseFn(rawCollectionWithL10n);

      l10n[initialL10nItem.locale] = initialL10nItem;

      const { localizations } = rawCollectionWithL10n.attributes;

      localizations?.data.forEach((rawCollection) => {
        const l10nItem = parseFn(rawCollection);
        l10n[l10nItem.locale] = l10nItem;
      });

      return l10n;
    });
  }

  abstract readonly ENDPOINT: string;
  abstract parseFromRawCollection(rawCollection: RawStrapiCollection): T;

  parseL10nFromApiRes = (strapiResponse: StrapiRes): CollectionByLocale<T>[] =>
    this._parseLocalizations<T>(strapiResponse, this.parseFromRawCollection);
}
