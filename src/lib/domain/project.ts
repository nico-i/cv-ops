import type { GetProjectsQuery } from "@/__generated__/gql";
import { Skill } from "@/lib/domain/skill";
import { StrapiImage } from "@/lib/DTOs/StrapiImage";
import { StrapiLink } from "@/lib/DTOs/StrapiLink";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
import { fetchSvgHtml, parseMdBulletListToHtml } from "@/lib/utils";

export class Project extends LocalizedStrapiEntity {
  static readonly QUERY = `
    query GetProjects($locale: I18NLocaleCode!) {
      projects(locale: $locale, sort: "start:desc") {
        data {
          id
          attributes {
            locale
            title
            slug
            start
            end
            tldr
            summary
            work_hours
            demo_url
            header_image {
              data {
                id
                attributes {
                  url
                  alternativeText
                  width
                  height
                  formats
                }
              }
            }
            links {
              text
              url
              icon {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            technologies {
              data {
                id
                attributes {
                  locale
                  name
                  proficiency
                  url
                  summary
                  svg {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  start: Date;
  end?: Date;

  constructor(
    id: string,
    locale: Locale,
    public title: string,
    public slug: string,
    start: string,
    public tldr: string,
    end?: string,
    public headerImage?: StrapiImage,
    public workHours?: number,
    public summaryListItems?: string[],
    public demoUrl?: string,
    public links?: StrapiLink[],
    public technologies?: Skill[]
  ) {
    super(id, locale);
    this.start = new Date(start);
    if (end) this.end = new Date(end);
  }

  static async fromQuery(res: GetProjectsQuery): Promise<Project[]> {
    const projects = Promise.all(
      res.projects?.data.map(async (rawProject) => {
        const {
          locale,
          title,
          slug,
          start,
          end,
          tldr,
          summary,
          work_hours,
          demo_url,
          header_image,
          links,
          technologies,
        } = rawProject.attributes!;

        return new Project(
          rawProject.id!,
          locale as Locale,
          title,
          slug,
          start,
          tldr,
          end,
          header_image
            ? new StrapiImage(
                header_image.data?.id!,
                header_image.data?.attributes?.width!,
                header_image.data?.attributes?.height!,
                header_image.data?.attributes?.url!,
                header_image.data?.attributes?.formats
              )
            : undefined,
          work_hours ?? undefined,
          !!summary ? await parseMdBulletListToHtml(summary) : undefined,
          demo_url ?? undefined,
          await Promise.all(
            links?.map(async (resLink) => {
              const { text, url, icon } = resLink!;
              return new StrapiLink(
                text,
                url,
                icon?.data?.attributes?.url
                  ? await fetchSvgHtml(icon?.data?.attributes?.url)
                  : undefined
              );
            }) ?? []
          ),
          await Promise.all(
            technologies?.data.map(async (rawSkill) => {
              const { locale, name, proficiency, url, summary, svg } =
                rawSkill.attributes!;

              return new Skill(
                rawSkill.id!,
                locale as Locale,
                name,
                proficiency,
                summary,
                url,
                svg?.data?.attributes?.url
                  ? await fetchSvgHtml(svg?.data?.attributes?.url)
                  : undefined
              );
            }) ?? []
          )
        );
      }) ?? []
    );

    return projects;
  }
}
