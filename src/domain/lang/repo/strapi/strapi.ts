import { Lang } from "@/domain/lang";
import { StrapiClient } from "@/infra/strapi/StrapiClient";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

class StrapiRepo extends LocalizedStrapiRepo<Lang> {
  override async getAll(locale: Locale): Promise<Lang[]> {
    const res = await StrapiClient.GetLangs({ locale });

    const langs =
      res.langs?.data.map((rawLang) => {
        const { locale, name, level, doc } = rawLang.attributes!;

        return new Lang(
          rawLang.id!,
          locale as Locale,
          name,
          level,
          doc?.data?.attributes?.url
        );
      }) ?? [];

    return langs;
  }
}

export const LangStrapiRepo = new StrapiRepo();
