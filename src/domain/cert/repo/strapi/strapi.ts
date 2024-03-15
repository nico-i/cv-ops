import { Cert } from "@domain/cert/cert";
import type { CertRepo } from "@domain/cert/repo/repo";
import { StrapiClient } from "@infra/strapi/StrapiClient";
import { StrapiBulletList } from "@util/DTOs/StrapiBulletList";
import { Locale } from "@util/types/Locale";
import { LocalizedStrapiRepo } from "@util/types/LocalizedStrapiRepo";

class StrapiRepo extends LocalizedStrapiRepo<Cert> implements CertRepo {
  override async getAll(locale: Locale): Promise<Cert[]> {
    const res = await StrapiClient.GetCerts({ locale });

    const certs =
      res.certs?.data.map((rawCert) => {
        const attr = rawCert.attributes!;
        const { title, issuer, received, info, doc, url } = attr;

        return new Cert(
          rawCert.id!,
          title,
          locale as Locale,
          issuer,
          received,
          info ? new StrapiBulletList(info) : undefined,
          doc?.data?.attributes?.url,
          url ?? undefined
        );
      }) ?? [];

    return certs;
  }
}

export const CertStrapiRepo = new StrapiRepo();
