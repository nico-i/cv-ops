import type { RawStrapiCollection } from "@infra/strapi";

export interface StrapiImageFormat {
  width: number;
  height: number;
  url: string;
}

export class StrapiImage implements StrapiImageFormat {
  width: number;
  height: number;
  url: string;
  formats?: {
    thumbnail?: StrapiImageFormat;
    small?: StrapiImageFormat;
    large?: StrapiImageFormat;
    medium?: StrapiImageFormat;
  };
  alternativeText?: string;

  constructor(rawImage: RawStrapiCollection) {
    const { width, height, url, formats, alternativeText } =
      rawImage.attributes;
    this.width = width;
    this.height = height;
    this.url = url;
    this.alternativeText = alternativeText;

    if (formats) {
      this.formats = {};
      Object.keys(formats).forEach((key: string) => {
        const { width, height, url } = formats[key];
        const strapiFormat: StrapiImageFormat = {
          width,
          height,
          url,
        };
        this.formats![key as "thumbnail" | "small" | "large" | "medium"] =
          strapiFormat;
      });
    }
  }
}
