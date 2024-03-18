import type { GetSkillsQuery } from "@/__generated__/gql";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiEntity } from "@/lib/types/LocalizedStrapiEntity";
import { fetchSvgHtml } from "@/lib/utils";

export class Skill extends LocalizedStrapiEntity {
  static readonly QUERY = `
    query GetSkills($locale: I18NLocaleCode!) {
      skills(locale: $locale, sort: ["priority:desc", "proficiency:desc"]) {
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
  `;

  constructor(
    id: string,
    locale: Locale,
    public name: string,
    public proficiency: number,
    public summary: string,
    public url: string,
    public svgHtml?: string
  ) {
    super(id, locale);
  }

  static async fromQuery(res: GetSkillsQuery): Promise<Skill[]> {
    const skills = Promise.all(
      res.skills?.data.map(async (rawSkill) => {
        const { locale, name, proficiency, summary, svg, url } =
          rawSkill.attributes!;

        return new Skill(
          rawSkill.id!,
          locale as Locale,
          name,
          proficiency,
          summary,
          url,
          svg?.data?.attributes?.url
            ? await fetchSvgHtml(svg.data?.attributes?.url)
            : undefined
        );
      }) ?? []
    );

    return skills;
  }
}
