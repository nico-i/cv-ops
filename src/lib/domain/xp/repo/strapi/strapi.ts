import type { getSdk } from "@/__generated__/gql";
import { Xp } from "@/lib/domain/xp";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";
import { parseMdBulletListToHtml } from "@/lib/utils";

export class XpStrapiRepo extends LocalizedStrapiRepo<Xp> {
  constructor(client: ReturnType<typeof getSdk>) {
    super(client);
  }

  override async getAll(locale: Locale): Promise<Xp[]> {
    const res = await this.sdk.GetXps({ locale });

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
