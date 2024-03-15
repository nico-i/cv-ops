import type { Lang } from "@/domain/lang";
import type { EntityByLocale } from "@/lib/types/EntityByLocale";

export interface LangRepo {
  getAll(locale: string): Promise<Lang[]>;
  getAllLocalized(locale: string): Promise<EntityByLocale<Lang>[]>;
}
