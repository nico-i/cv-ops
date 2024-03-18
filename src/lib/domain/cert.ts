import type { GetCertsQuery } from "@/__generated__/gql";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
import { parseMdBulletListToHtml } from "@/lib/utils";

export class Cert extends LocalizedStrapiEntity {
  static readonly QUERY = `
    query GetCerts($locale: I18NLocaleCode!) {
      certs(locale: $locale, sort: "received:desc") {
        data {
          id
          attributes {
            locale
            title
            received
            issuer
            info
            doc {
              data {
                attributes {
                  url
                }
              }
            }
            url
          }
        }
      }
    }
  `;

  public received: Date;

  constructor(
    id: string,
    public title: string,
    locale: Locale,
    public issuer: string,
    received: string,
    public infoListItems: string[],
    public docUrl?: string,
    public url?: string
  ) {
    super(id, locale);
    this.received = new Date(received);
  }

  static async fromQuery(res: GetCertsQuery): Promise<Cert[]> {
    const certs = await Promise.all(
      res.certs?.data.map(async (rawCert) => {
        const attr = rawCert.attributes!;
        const { title, issuer, received, info, doc, url, locale } = attr;

        return new Cert(
          rawCert.id!,
          title,
          locale as Locale,
          issuer,
          received,
          await parseMdBulletListToHtml(info),
          doc?.data?.attributes?.url,
          url ?? undefined
        );
      }) ?? []
    );

    return certs;
  }
}
