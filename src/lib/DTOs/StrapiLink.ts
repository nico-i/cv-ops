import type { StrapiSvg } from "@/lib/DTOs/StrapiSvg";

export class StrapiLink {
  constructor(
    public text: string,
    public url: string,
    public icon?: StrapiSvg
  ) {}
}
