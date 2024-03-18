import type { getSdk } from "@/__generated__/gql";
import { StrapiImage } from "@/lib/DTOs/StrapiImage";
import { StrapiLink } from "@/lib/DTOs/StrapiLink";
import { Info } from "@/lib/domain/info";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";
import { fetchSvgHtml } from "@/lib/utils";

export class InfoStrapiRepo extends LocalizedStrapiRepo<Info> {
  constructor(client: ReturnType<typeof getSdk>) {
    super(client);
  }

  override async getAll(locale: Locale): Promise<Info[]> {
    const res = await this.sdk.GetInfo({ locale });

    const {
      locale: resLocale,
      name,
      phone,
      address,
      dob,
      bio,
      portrait,
      occupation,
      contact,
    } = res.info?.data?.attributes!;

    const portraitAttributes = portrait?.data?.attributes;

    const portraitImage = new StrapiImage(
      portrait.data?.id!,
      portraitAttributes?.width!,
      portraitAttributes?.height!,
      portraitAttributes?.url!,
      portraitAttributes?.formats,
      portraitAttributes?.alternativeText!
    );

    const contacts = await Promise.all(
      contact?.map(
        async (resContact): Promise<StrapiLink> =>
          new StrapiLink(
            resContact?.text!,
            resContact?.url!,
            resContact?.icon?.data?.attributes?.url
              ? await fetchSvgHtml(resContact?.icon?.data?.attributes?.url)
              : undefined
          )
      ) ?? []
    );

    return [
      new Info(
        res.info?.data?.id!,
        resLocale as Locale,
        portraitImage,
        address,
        occupation,
        name,
        phone,
        dob,
        await Promise.all(contacts),
        bio ?? undefined
      ),
    ];
  }
}
