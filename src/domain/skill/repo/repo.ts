import type { Skill } from "@/domain/skill";
import type { EntityByLocale } from "@/lib/types/EntityByLocale";

export interface SkillRepo {
  getAll(locale: string): Promise<Skill[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Skill>[]>;
}
