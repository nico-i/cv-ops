import type { Volunteer } from "@domain/volunteer/volunteer";
import type { EntityByLocale } from "@util/types/EntityByLocale";

export interface VolunteerRepo {
  getAll(locale: string): Promise<Volunteer[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Volunteer>[]>;
}
