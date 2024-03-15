import type { Locale } from "@util/types/Locale";
import { StrapiCollection } from "@util/types/StrapiCollection";

export abstract class LocalizedStrapiCollection extends StrapiCollection {
  constructor(id: string, public locale: Locale) {
    super(id);
  }
}
