import { Volunteer } from "@/lib/domain/volunteer";
import { StrapiClient } from "@/lib/infra/strapi/StrapiClient";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

class StrapiRepo extends LocalizedStrapiRepo<Volunteer> {
  override async getAll(locale: Locale): Promise<Volunteer[]> {
    const res = await StrapiClient.GetVolunteers({ locale });

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

export const VolunteerStrapiRepo = new StrapiRepo();
