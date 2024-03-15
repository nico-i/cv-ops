import type { Locale } from "@/lib/types/Locale";
import { StrapiEntity } from "@/lib/types/StrapiEntity";

export abstract class LocalizedStrapiEntity extends StrapiEntity {
  constructor(id: string, public locale: Locale) {
    super(id);
  }
}
