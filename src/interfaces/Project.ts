import type { RawStrapiCollection, StrapiRes } from "@infra/Strapi";
import { ProjectLink } from "@interfaces/ProjectLink";
import { Skill } from "@interfaces/Skill";
import { StrapiImage } from "@interfaces/StrapImage";
import type { Locale } from "@util/Locale";
import { LocalizedCollection } from "@util/StrapiCollection";

export class Project extends LocalizedCollection {
  locale: Locale;
  headerImage: StrapiImage;
  seoImage: StrapiImage;
  title: string;
  slug: string;
  seoTitle: string;
  startDate: Date;
  endDate: Date;
  workHours: number;
  projectUrl: string;
  tldr: string;
  summary: string;
  links: ProjectLink[];
  technologies: Skill[];

  constructor(strapiRes: StrapiRes) {
    super(strapiRes);
    const {
      locale,
      headerImage,
      seoImage,
      title,
      slug,
      seoTitle,
      startDate,
      endDate,
      workHours,
      projectUrl,
      tldr,
      summary,
      links,
      technologies,
    } = this.fromRawCollection(strapiRes.data);

    this.locale = locale;
    this.headerImage = headerImage;
    this.seoImage = seoImage;
    this.title = title;
    this.slug = slug;
    this.seoTitle = seoTitle;
    this.startDate = startDate;
    this.endDate = endDate;
    this.workHours = workHours;
    this.projectUrl = projectUrl;
    this.tldr = tldr;
    this.summary = summary;
    this.links = links;
    this.technologies = technologies;
  }

  override fromRawCollection(rawCollection: RawStrapiCollection): {
    [key in keyof this]: this[key];
  } {
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

    const headerImage = new StrapiImage();
    const seoImage = new StrapiImage();

    const startDate = new Date(start);
    const endDate = new Date(end);

    const linksArray = links.data.map((link: RawStrapiCollection) => {
      return new ProjectLink();
    });

    const technologiesArray = technologies.data.map(
      (tech: RawStrapiCollection) => {
        return new Skill({ data: tech });
      }
    );

    return {
      locale,
      headerImage,
      seoImage,
      title,
      slug,
      seoTitle: seo_title,
      startDate,
      endDate,
      workHours: work_hours,
      projectUrl: url,
      tldr,
      summary,
      links: linksArray,
      technologies: technologiesArray,
    };
  }
}
