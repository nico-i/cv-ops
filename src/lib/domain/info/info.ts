import type { StrapiImage } from "@/lib/DTOs/StrapiImage";
import type { StrapiLink } from "@/lib/DTOs/StrapiLink";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
export class Info extends LocalizedStrapiEntity {
  public dob: Date;

  constructor(
    id: string,
    locale: Locale,
    public portrait: StrapiImage,
    public address: string,
    public occupation: string,
    public name: string,
    public phone: string,
    dob: string,
    public contacts?: StrapiLink[],
    public bio?: string
  ) {
    super(id, locale);
    this.dob = new Date(dob);
  }
}
