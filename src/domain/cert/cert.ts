import { StrapiBulletList } from "@util/DTOs/StrapiBulletList";
import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiCollection } from "@util/types/LocalizedStrapiCollection";

export class Cert extends LocalizedStrapiCollection {
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
