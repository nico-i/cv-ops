import { Ed } from "@/domain/ed";
import type { EdRepo } from "@/domain/ed/repo/repo";
import { StrapiClient } from "@/infra/strapi/StrapiClient";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

class StrapiRepo extends LocalizedStrapiRepo<Ed> implements EdRepo {
  override async getAll(locale: Locale): Promise<Ed[]> {
    const res = await StrapiClient.GetEds({ locale });

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

export const EdStrapiRepo = new StrapiRepo();
