import type { RawStrapiCollection, StrapiRes } from "@infra/Strapi";
import type { Locale } from "@util/Locale";

interface StrapiCollection<T> {
  readonly ENDPOINT: string;
  parseFromRawCollection(rawCollection: RawStrapiCollection): T;
}

export abstract class StrapiCollectionFactory<T>
  implements StrapiCollection<T>
{
  abstract readonly ENDPOINT: string;
  abstract parseFromRawCollection(rawCollection: RawStrapiCollection): T;
  parseFromApiRes(strapiResponse: StrapiRes): T[] {
    const { data } = strapiResponse;
    return data.map((rawCollection: RawStrapiCollection): T => {
      return this.parseFromRawCollection(rawCollection);
    });
  }
}

export type LocalizedCollection<T> = Partial<Record<Locale, T>>;

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
  ): LocalizedCollection<T>[] {
    const { data } = strapiResponse;

    return data.map((rawCollectionWithL10n): LocalizedCollection<T> => {
      let l10n: LocalizedCollection<T> = {};

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

  parseL10nFromApiRes = (strapiResponse: StrapiRes): LocalizedCollection<T>[] =>
    this._parseLocalizations<T>(strapiResponse, this.parseFromRawCollection);
}
