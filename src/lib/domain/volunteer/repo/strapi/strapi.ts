import type { getSdk } from "@/__generated__/gql";
import { Volunteer } from "@/lib/domain/volunteer";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

export class VolunteerStrapiRepo extends LocalizedStrapiRepo<Volunteer> {
  constructor(client: ReturnType<typeof getSdk>) {
    super(client);
  }

  override async getAll(locale: Locale): Promise<Volunteer[]> {
    const res = await this.sdk.GetVolunteers({ locale });

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
