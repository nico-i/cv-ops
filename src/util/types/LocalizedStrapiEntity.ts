import type { Locale } from "@util/types/Locale";
import { StrapiEntity } from "@util/types/StrapiEntity";

export abstract class LocalizedStrapiEntity extends StrapiEntity {
  constructor(id: string, public locale: Locale) {
    super(id);
  }
}
