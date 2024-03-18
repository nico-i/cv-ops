import { getSdk } from "@/__generated__/gql";
import { Lang } from "@/lib/domain/lang";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";
import { fetchSvgHtml } from "@/lib/utils";

export class LangStrapiRepo extends LocalizedStrapiRepo<Lang> {
  constructor(client: ReturnType<typeof getSdk>) {
    super(client);
  }

  override async getAll(locale: Locale): Promise<Lang[]> {
    const res = await this.sdk.GetLangs({ locale });

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
