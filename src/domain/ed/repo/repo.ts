import type { Ed } from "@domain/ed";
import type { EntityByLocale } from "@util/types/EntityByLocale";

export interface EdRepo {
  getAll(locale: string): Promise<Ed[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Ed>[]>;
}
