import type { GetInterestsQuery } from "@/__generated__/gql";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export class Interest extends LocalizedStrapiEntity {
  static readonly QUERY = /* GraphQL */ `
    query GetInterests($locale: I18NLocaleCode!) {
      interests(locale: $locale, sort: "name") {
        data {
          id
          attributes {
            locale
            name
          }
        }
      }
    }
  `;

  constructor(id: string, locale: Locale, public name: string) {
    super(id, locale);
  }

  static fromQuery(res: GetInterestsQuery): Interest[] {
    const interests = res.interests?.data.map((resInterest) => {
      const { locale, name } = resInterest.attributes!;

      return new Interest(resInterest.id!, locale as Locale, name);
    });

    return interests ?? [];
  }
}
