import type { Interest } from "@domain/interest";
import type { EntityByLocale } from "@util/types/EntityByLocale";

export interface InterestRepo {
  getAll(locale: string): Promise<Interest[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Interest>[]>;
}
