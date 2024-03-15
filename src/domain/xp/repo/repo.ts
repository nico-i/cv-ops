import type { Xp } from "@domain/xp";
import type { CollectionByLocale } from "@util/types/CollectionByLocale";

export interface XpRepo {
  getAll(locale: string): Promise<Xp[]>;
  getAllLocalized(locale: string): Promise<CollectionByLocale<Xp>[]>;
}
