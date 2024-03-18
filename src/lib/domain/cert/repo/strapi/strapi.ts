import type { getSdk } from "@/__generated__/gql";
import { Cert } from "@/lib/domain/cert";
import type { CertRepo } from "@/lib/domain/cert/repo/repo";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";
import { parseMdBulletListToHtml } from "@/lib/utils";

export class CertStrapiRepo extends LocalizedStrapiRepo<Cert> implements CertRepo {
  constructor(client: ReturnType<typeof getSdk>) {
    super(client);
  }

  override async getAll(locale: Locale): Promise<Cert[]> {
    const res = await this.sdk.GetCerts({ locale });

    const certs = await Promise.all(
      res.certs?.data.map(async (rawCert) => {
        const attr = rawCert.attributes!;
        const { title, issuer, received, info, doc, url } = attr;

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
