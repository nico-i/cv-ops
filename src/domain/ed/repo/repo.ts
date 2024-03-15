import { Ed } from "@/domain/ed";
import type { EntityByLocale } from "@/lib/types/EntityByLocale";

export interface EdRepo {
  getAll(locale: string): Promise<Ed[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Ed>[]>;
}
