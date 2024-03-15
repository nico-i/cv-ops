import type { Skill } from "@domain/skill/skill";
import type { CollectionByLocale } from "@util/types/CollectionByLocale";

export interface SkillRepo {
  getAll(locale: string): Promise<Skill[]>;
  getAllLocalized(locale: string): Promise<CollectionByLocale<Skill>[]>;
}
