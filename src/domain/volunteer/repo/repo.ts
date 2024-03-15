import type { Volunteer } from "@/domain/volunteer";
import type { EntityByLocale } from "@/lib/types/EntityByLocale";

export interface VolunteerRepo {
  getAll(locale: string): Promise<Volunteer[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Volunteer>[]>;
}
