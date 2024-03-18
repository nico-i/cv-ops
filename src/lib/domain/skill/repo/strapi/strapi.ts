import type { getSdk } from "@/__generated__/gql";
import { Skill } from "@/lib/domain/skill";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";
import { fetchSvgHtml } from "@/lib/utils";

export class SkillStrapiRepo extends LocalizedStrapiRepo<Skill> {
  constructor(client: ReturnType<typeof getSdk>) {
    super(client);
  }

  override async getAll(locale: Locale): Promise<Skill[]> {
    const res = await this.sdk.GetSkills({ locale });

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
