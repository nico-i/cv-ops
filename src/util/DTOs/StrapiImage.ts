import { StrapiEntity } from "@util/types/StrapiEntity";

interface StrapiImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null;
  width: number;
  height: number;
  size: number;
  url: string;
  provider_metadata: { public_id: string; resource_type: string };
}

export class StrapiImage extends StrapiEntity {
  constructor(
    id: string,
    public width: number,
    public height: number,
    public url: string,
    public formats?: Record<
      "thumbnail" | "small" | "medium" | "large",
      StrapiImageFormat
    >,
    public alternativeText?: string
  ) {
    super(id);
  }
}
