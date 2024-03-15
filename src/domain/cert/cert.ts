import type { StrapiBulletList } from "@/lib/DTOs/StrapiBulletList";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";

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
