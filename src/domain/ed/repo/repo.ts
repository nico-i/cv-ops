import type { Ed } from "@domain/ed";
import type { CollectionByLocale } from "@util/types/CollectionByLocale";

export interface EdRepo {
  getAll(locale: string): Promise<Ed[]>;
  getAllLocalized(locale: string): Promise<CollectionByLocale<Ed>[]>;
}
