import { Project } from "@/domain/project";
import { Skill } from "@/domain/skill";
import { StrapiClient } from "@/infra/strapi/StrapiClient";
import { StrapiBulletList } from "@/lib/DTOs/StrapiBulletList";
import { StrapiImage } from "@/lib/DTOs/StrapiImage";
import { StrapiLink } from "@/lib/DTOs/StrapiLink";
import { StrapiSvg } from "@/lib/DTOs/StrapiSvg";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

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
