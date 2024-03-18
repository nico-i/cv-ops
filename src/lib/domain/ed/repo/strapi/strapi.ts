import type { getSdk } from "@/__generated__/gql";
import { Ed } from "@/lib/domain/ed";
import type { EdRepo } from "@/lib/domain/ed/repo/repo";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

export class EdStrapiRepo extends LocalizedStrapiRepo<Ed> implements EdRepo {
  constructor(client: ReturnType<typeof getSdk>) {
    super(client);
  }

  override async getAll(locale: Locale): Promise<Ed[]> {
    const res = await this.sdk.GetEds({ locale });

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
