import type { GetXpsQuery as GetXpsQueryType } from "@/__generated__/gql";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
import { parseMdBulletListToHtml } from "@/lib/utils";

export class Xp extends LocalizedStrapiEntity {
  static readonly QUERY = `
    query getXps($locale: I18NLocaleCode!) {
      xps(locale: $locale) {
        data {
          id
          attributes {
            locale
            position
            company
            info
            start
            end
            url
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
    public position: string,
    public company: string,
    start: string,
    public infoListItems: string[],
    end?: string,
    public url?: string
  ) {
    super(id, locale);
    this.start = new Date(start);
    if (end) this.end = new Date(end);
  }

  static async fromQuery(res: GetXpsQueryType): Promise<Xp[]> {
    const xps = await Promise.all(
      res.xps?.data.map(async (resXp) => {
        const { locale, position, company, info, start, end, url } =
          resXp.attributes!;

        return new Xp(
          resXp.id!,
          locale as Locale,
          position,
          company,
          start,
          await parseMdBulletListToHtml(info),
          end,
          url ?? undefined
        );
      }) ?? []
    );

    xps?.sort((a, b) => {
      // if end date is not given put it to the top and sort by start date descending
      if (a.end === undefined && b.end === undefined) {
        return b.start.getTime() - a.start.getTime();
      }
      if (a.end === undefined) {
        return -1;
      }
      if (b.end === undefined) {
        return 1;
      }
      return b.start.getTime() - a.start.getTime();
    });

    return xps;
  }
}
