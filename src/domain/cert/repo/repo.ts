import type { Cert } from "@/domain/cert";
import type { EntityByLocale } from "@/lib/types/EntityByLocale";

export interface CertRepo {
  getAll(locale: string): Promise<Cert[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Cert>[]>;
}
