import { StrapiBulletList } from "@domain/StrapiBulletList";
import { StrapiDoc } from "@domain/StrapiDoc";
import {
  LocalizedStrapiCollectionFactory,
  type LocalizedCollection,
  type RawStrapiCollection,
} from "@infra/strapi";

export interface Cert extends LocalizedCollection {
  title: string;
  received: Date;
  issuer: string;
  info?: StrapiBulletList;
  doc?: StrapiDoc;
  url?: string;
}

class CertFactory extends LocalizedStrapiCollectionFactory<Cert> {
  readonly ENDPOINT = "certs";

  parseFromRawCollection(rawCollection: RawStrapiCollection): Cert {
    const { locale, title, received, issuer, info, doc, url } =
      rawCollection.attributes;

    const cert: Cert = {
      locale,
      title,
      received: new Date(received),
      issuer,
    };

    if (info) {
      cert.info = new StrapiBulletList(info);
    }

    if (doc) {
      cert.doc = new StrapiDoc(doc.data);
    }

    if (url) {
      cert.url = url;
    }

    return cert;
  }
}

export const certFactory = new CertFactory();
