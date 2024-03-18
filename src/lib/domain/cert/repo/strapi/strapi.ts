import { Cert } from "@/lib/domain/cert";
import type { CertRepo } from "@/lib/domain/cert/repo/repo";
import { StrapiClient } from "@/lib/infra/strapi/StrapiClient";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";
import { parseMdBulletListToHtml } from "@/lib/utils";

class StrapiRepo extends LocalizedStrapiRepo<Cert> implements CertRepo {
  override async getAll(locale: Locale): Promise<Cert[]> {
    const res = await StrapiClient.GetCerts({ locale });

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

export const CertStrapiRepo = new StrapiRepo();
