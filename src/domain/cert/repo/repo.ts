import type { Cert } from "@domain/cert/cert";
import type { EntityByLocale } from "@util/types/EntityByLocale";

export interface CertRepo {
  getAll(locale: string): Promise<Cert[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Cert>[]>;
}
