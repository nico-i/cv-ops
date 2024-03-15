import type { Project } from "@domain/project/project";
import type { EntityByLocale } from "@util/types/EntityByLocale";

export interface ProjectRepo {
  getAll(locale: string): Promise<ProjectRepo[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Project>[]>;
}
