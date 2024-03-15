import { Xp } from "@domain/xp";
import { StrapiClient } from "@infra/strapi/StrapiClient";
import { StrapiBulletList } from "@util/DTOs/StrapiBulletList";
import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiRepo } from "@util/types/LocalizedStrapiRepo";

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

    return xps ?? [];
  }
}

export const XpStrapiRepo = new StrapiRepo();
