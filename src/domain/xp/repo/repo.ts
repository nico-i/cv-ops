import type { Xp } from "@domain/xp";
import type { EntityByLocale } from "@util/types/EntityByLocale";

export interface XpRepo {
  getAll(locale: string): Promise<Xp[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Xp>[]>;
}
