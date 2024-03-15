import type { Project } from "@domain/project/project";
import type { CollectionByLocale } from "@util/types/CollectionByLocale";

export interface ProjectRepo {
  getAll(locale: string): Promise<ProjectRepo[]>;
  getAllLocalized(locale: string): Promise<CollectionByLocale<Project>[]>;
}
