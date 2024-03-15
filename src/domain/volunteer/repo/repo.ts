import type { Volunteer } from "@domain/volunteer/volunteer";
import type { CollectionByLocale } from "@util/types/CollectionByLocale";

export interface VolunteerRepo {
  getAll(locale: string): Promise<Volunteer[]>;
  getAllLocalized(locale: string): Promise<CollectionByLocale<Volunteer>[]>;
}
