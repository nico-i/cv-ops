import type { GetVolunteersQuery } from "@/__generated__/gql";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

export class Volunteer extends LocalizedStrapiEntity {
  static readonly QUERY = `
    query GetVolunteers($locale: I18NLocaleCode!) {
      volunteers(locale: $locale, sort: "start:desc") {
        data {
          id
          attributes {
            locale
            org
            activity
            info
            start
            end
            url
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
    public activity: string,
    public org: string,
    start: string,
    end?: string,
    public url?: string,
    public summary?: string,
    public docUrl?: string
  ) {
    super(id, locale);
    this.start = new Date(start);
    if (end) this.end = new Date(end);
  }

  static async fromQuery(res: GetVolunteersQuery): Promise<Volunteer[]> {
    const volunteers = res.volunteers?.data.map((resVol) => {
      const { locale, org, activity, info, start, end, url, doc } =
        resVol.attributes!;

      return new Volunteer(
        resVol.id!,
        locale as Locale,
        activity,
        org,
        start,
        end,
        url ?? undefined,
        info ?? undefined,
        doc?.data?.attributes?.url
      );
    });

    return volunteers ?? [];
  }
}
