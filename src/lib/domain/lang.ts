import type { GetLangsQuery } from "@/__generated__/gql";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
import { fetchSvgHtml } from "@/lib/utils";

export class Lang extends LocalizedStrapiEntity {
  static readonly QUERY = /* GraphQL */ `
    query GetLangs($locale: I18NLocaleCode!) {
      langs(locale: $locale, sort: "level:desc") {
        data {
          id
          attributes {
            locale
            name
            level
            icon {
              data {
                attributes {
                  url
                }
              }
            }
            doc {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
  `;

  constructor(
    id: string,
    locale: Locale,
    public name: string,
    public svgHtml: string,
    public level: string,
    public docUrl?: string
  ) {
    super(id, locale);
  }

  static async fromQuery(res: GetLangsQuery): Promise<Lang[]> {
    const langs = Promise.all(
      res.langs?.data.map(async (rawLang) => {
        const { locale, name, level, doc } = rawLang.attributes!;

        return new Lang(
          rawLang.id!,
          locale as Locale,
          name,
          await fetchSvgHtml(rawLang.attributes?.icon?.data?.attributes?.url!),

          level,
          doc?.data?.attributes?.url
        );
      }) ?? []
    );

    return langs;
  }
}
