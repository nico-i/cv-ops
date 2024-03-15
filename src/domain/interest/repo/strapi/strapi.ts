import { Interest } from "@/domain/interest";
import { StrapiClient } from "@/infra/strapi/StrapiClient";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

class StrapiRepo extends LocalizedStrapiRepo<Interest> {
  override async getAll(locale: Locale): Promise<Interest[]> {
    const rest = await StrapiClient.GetInterests({ locale });

    const interests = rest.interests?.data.map((resInterest) => {
      const { locale, name } = resInterest.attributes!;

      return new Interest(resInterest.id!, locale as Locale, name);
    });

    return interests ?? [];
  }
}

export const InterestStrapiRepo = new StrapiRepo();
