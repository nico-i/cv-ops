import type { getSdk } from "@/__generated__/gql";
import { Interest } from "@/lib/domain/interest";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

export class InterestStrapiRepo extends LocalizedStrapiRepo<Interest> {
  constructor(client: ReturnType<typeof getSdk>) {
    super(client);
  }

  override async getAll(locale: Locale): Promise<Interest[]> {
    const rest = await this.sdk.GetInterests({ locale });

    const interests = rest.interests?.data.map((resInterest) => {
      const { locale, name } = resInterest.attributes!;

      return new Interest(resInterest.id!, locale as Locale, name);
    });

    return interests ?? [];
  }
}
