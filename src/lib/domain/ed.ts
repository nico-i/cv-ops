import type { GetEdsQuery } from "@/__generated__/gql";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export class Ed extends LocalizedStrapiEntity {
  static readonly QUERY = `
    query GetEds($locale: I18NLocaleCode!) {
      eds(locale: $locale, sort: ["end:desc", "start:desc"]) {
        data {
          id
          attributes {
            locale
            institute
            start
            end
            degree
            url
            grade
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

  public start: Date;
  public end?: Date;

  constructor(
    id: string,
    locale: Locale,
    public institute: string,
    public degree: string,
    start: string,
    public grade: string,
    public url?: string,
    public docUrl?: string,
    end?: string
  ) {
    super(id, locale);
    this.start = new Date(start);
    if (end) this.end = new Date(end);
  }

  static fromQuery(res: GetEdsQuery): Ed[] {
    const eds =
      res.eds?.data.map((rawEd) => {
        const { locale, institute, degree, start, grade, url, doc, end } =
          rawEd.attributes!;

        return new Ed(
          rawEd.id!,
          locale as Locale,
          institute,
          degree,
          start,
          grade,
          url ?? undefined,
          doc?.data?.attributes?.url,
          end
        );
      }) ?? [];

    return eds;
  }
}
