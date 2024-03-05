import type { Locale } from "./Locale";

export abstract class LocalizedCollection<T extends { locale: Locale }> {
  [locale: string]: T;

  constructor(parseFromStrapiApi: (data: any) => T, strapiApiData: any) {
    const defaultL10nItem = parseFromStrapiApi(strapiApiData);

    const localizations = strapiApiData.attributes.localizations.data;

    this[defaultL10nItem.locale] = defaultL10nItem;

    localizations?.forEach((loc: any) => {
      const l10nItem = {
        ...defaultL10nItem,
        ...parseFromStrapiApi(loc),
      };
      this[l10nItem.locale] = l10nItem;
    });
  }
}
