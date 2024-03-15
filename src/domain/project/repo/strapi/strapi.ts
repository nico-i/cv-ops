import { Project } from "@domain/project";
import { Skill } from "@domain/skill";
import { StrapiClient } from "@infra/strapi/StrapiClient";
import { StrapiBulletList } from "@util/DTOs/StrapiBulletList";
import { StrapiLink } from "@util/DTOs/StrapiLink";
import { StrapiSvg } from "@util/DTOs/StrapiSvg";
import type { Locale } from "@util/types/Locale";
import { LocalizedStrapiRepo } from "@util/types/LocalizedStrapiRepo";

class StrapiRepository extends LocalizedStrapiRepo<Project> {
  override async getAll(locale: Locale): Promise<Project[]> {
    const res = await StrapiClient.GetProjects({ locale });

    const projects =
      res.projects?.data.map((rawProject) => {
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
          work_hours ?? undefined,
          summary ? new StrapiBulletList(summary) : undefined,
          demo_url ?? undefined,
          links?.map((resLink) => {
            const { text, url, icon } = resLink!;
            return new StrapiLink(
              text,
              url,
              icon?.data?.attributes?.url
                ? new StrapiSvg(icon?.data?.attributes?.url)
                : undefined
            );
          }),
          technologies?.data.map((rawSkill) => {
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
                ? new StrapiSvg(svg?.data?.attributes?.url)
                : undefined
            );
          })
        );
      }) ?? [];

    return projects;
  }
}

export const ProjectStrapiRepo = new StrapiRepository();
