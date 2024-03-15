import { Project } from "@/lib/domain/project";
import type { EntityByLocale } from "@/lib/types/EntityByLocale";
export interface ProjectRepo {
  getAll(locale: string): Promise<ProjectRepo[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Project>[]>;
}
