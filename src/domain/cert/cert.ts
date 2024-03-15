import { StrapiBulletList } from "@util/DTOs/StrapiBulletList";
import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiEntity } from "@util/types/LocalizedStrapiEntity";

export class Cert extends LocalizedStrapiEntity {
  received: Date;

  constructor(
    id: string,
    public title: string,
    locale: Locale,
    public issuer: string,
    received: string,
    public info?: StrapiBulletList,
    public docUrl?: string,
    public url?: string
  ) {
    super(id, locale);
    this.received = new Date(received);
  }
}
