import { Xp } from "@/lib/domain/xp";
import { StrapiClient } from "@/lib/infra/strapi/StrapiClient";
import { StrapiBulletList } from "@/lib/DTOs/StrapiBulletList";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

class StrapiRepo extends LocalizedStrapiRepo<Xp> {
  override async getAll(locale: Locale): Promise<Xp[]> {
    const res = await StrapiClient.GetXps({ locale });

    const xps = res.xps?.data.map((resXp) => {
      const { locale, position, company, info, start, end, url } =
        resXp.attributes!;

      return new Xp(
        resXp.id!,
        locale as Locale,
        position,
        company,
        start,
        end,
        url ?? undefined,
        info ? new StrapiBulletList(info) : undefined
      );
    });

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

    return xps ?? [];
  }
}

export const XpStrapiRepo = new StrapiRepo();
