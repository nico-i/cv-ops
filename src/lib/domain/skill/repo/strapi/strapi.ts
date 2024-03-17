import { Skill } from "@/lib/domain/skill";
import { StrapiClient } from "@/lib/infra/strapi/StrapiClient";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";
import { fetchSvgHtml } from "@/lib/utils";

class StrapiRepo extends LocalizedStrapiRepo<Skill> {
  override async getAll(locale: Locale): Promise<Skill[]> {
    const res = await StrapiClient.GetSkills({ locale });

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

export const SkillStrapiRepo = new StrapiRepo();
