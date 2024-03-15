import type { Xp } from "@/lib/domain/xp";
import type { EntityByLocale } from "@/lib/types/EntityByLocale";

export interface XpRepo {
  getAll(locale: string): Promise<Xp[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Xp>[]>;
}
