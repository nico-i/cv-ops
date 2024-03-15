import type { Cert } from "@domain/cert/cert";
import type { CollectionByLocale } from "@util/types/CollectionByLocale";

export interface CertRepo {
  getAll(locale: string): Promise<Cert[]>;
  getAllLocalized(locale: string): Promise<CollectionByLocale<Cert>[]>;
}
