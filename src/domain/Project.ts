import type { StrapiBulletList } from "@domain/StrapiBulletList";
import type { StrapiLink } from "@domain/StrapiLink";
import {
  LocalizedStrapiCollectionFactory,
  type LocalizedCollection,
  type RawStrapiCollection,
} from "@infra/strapi";
import type { Locale } from "@util/Locale";
import { SkillFactory, type Skill } from "src/domain/Skill";
import { StrapiImage } from "src/domain/StrapiImage";

export interface Project extends LocalizedCollection {
  locale: Locale;
  headerImage?: StrapiImage;
  title: string;
  slug: string;
  startDate: Date;
  endDate?: Date;
  workHours?: number;
  demoUrl?: string;
  tldr: string;
  summary?: StrapiBulletList;
  links?: StrapiLink[];
  technologies?: Skill[];
}

export class ProjectFactory extends LocalizedStrapiCollectionFactory<Project> {
  readonly ENDPOINT = "projects";
  parseFromRawCollection(rawCollection: RawStrapiCollection): Project {
    const {
      locale,
      header_image,
      seo_image,
      title,
      slug,
      seo_title,
      start,
      end,
      work_hours,
      url,
      tldr,
      summary,
      links,
      technologies,
    } = rawCollection.attributes;

    console.log(links);

    const startDate = new Date(start);
    const endDate = new Date(end);

    const technologiesArray = technologies?.data.map(
      (tech: RawStrapiCollection) => {
        return new SkillFactory().parseFromRawCollection(tech);
      }
    );

    return {
      locale,
      ...(header_image && {
        headerImage: new StrapiImage(header_image.data as RawStrapiCollection),
      }),
      ...(seo_image && {
        seoImage: new StrapiImage(seo_image.data as RawStrapiCollection),
      }),
      title,
      slug,
      seoTitle: seo_title,
      startDate,
      endDate,
      workHours: work_hours,
      projectUrl: url,
      tldr,
      summary,
      technologies: technologiesArray,
    };
  }
}
