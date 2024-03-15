import type { Lang } from "@domain/lang";
import type { CollectionByLocale } from "@util/types/CollectionByLocale";

export interface LangRepo {
  getAll(locale: string): Promise<Lang[]>;
  getAllLocalized(locale: string): Promise<CollectionByLocale<Lang>[]>;
}
