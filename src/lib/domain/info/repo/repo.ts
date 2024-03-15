import type { Info } from "@/lib/domain/info";
import type { EntityByLocale } from "@/lib/types/EntityByLocale";

export interface InfoRepo {
  getAll(locale: string): Promise<Info[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Info>[]>;
}
