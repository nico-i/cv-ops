import type { GetInfoQuery } from "@/__generated__/gql";
import { StrapiImage } from "@/lib/DTOs/StrapiImage";
import { StrapiLink } from "@/lib/DTOs/StrapiLink";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
import { fetchSvgHtml } from "@/lib/utils";

export class Info extends LocalizedStrapiEntity {
  static readonly QUERY = `
    query GetInfo($locale: I18NLocaleCode!) {
      info(locale: $locale) {
        data {
          id
          attributes {
            locale
            name
            phone
            address
            dob
            bio
            occupation
            portrait {
              data {
                id
                attributes {
                  alternativeText
                  width
                  height
                  formats
                  url
                }
              }
            }
            contact {
              text
              url
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  public dob: Date;

  constructor(
    id: string,
    locale: Locale,
    public portrait: StrapiImage,
    public address: string,
    public occupation: string,
    public name: string,
    public phone: string,
    dob: string,
    public contacts?: StrapiLink[],
    public bio?: string
  ) {
    super(id, locale);
    this.dob = new Date(dob);
  }

  static async fromQuery(res: GetInfoQuery): Promise<Info> {
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

    return new Info(
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
    );
  }
}
