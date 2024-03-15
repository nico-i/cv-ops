import type { Interest } from "@domain/interest";
import type { CollectionByLocale } from "@util/types/CollectionByLocale";

export interface InterestRepo {
  getAll(locale: string): Promise<Interest[]>;
  getAllLocalized(locale: string): Promise<CollectionByLocale<Interest>[]>;
}
