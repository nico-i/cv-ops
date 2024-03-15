import { StrapiSvg } from "@util/DTOs/StrapiSvg";

export class StrapiLink {
  constructor(
    public text: string,
    public url: string,
    public icon?: StrapiSvg
  ) {}
}
