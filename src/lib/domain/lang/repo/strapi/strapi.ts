import { Lang } from "@/lib/domain/lang";
import { StrapiClient } from "@/lib/infra/strapi/StrapiClient";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";
import { fetchSvgHtml } from "@/lib/utils";

class StrapiRepo extends LocalizedStrapiRepo<Lang> {
  override async getAll(locale: Locale): Promise<Lang[]> {
    const res = await StrapiClient.GetLangs({ locale });

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

export const LangStrapiRepo = new StrapiRepo();
