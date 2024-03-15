import type { Skill } from "@domain/skill/skill";
import type { EntityByLocale } from "@util/types/EntityByLocale";

export interface SkillRepo {
  getAll(locale: string): Promise<Skill[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Skill>[]>;
}
