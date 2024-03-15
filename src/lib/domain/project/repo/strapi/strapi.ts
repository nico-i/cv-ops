import { StrapiBulletList } from "@/lib/DTOs/StrapiBulletList";
import { StrapiImage } from "@/lib/DTOs/StrapiImage";
import { StrapiLink } from "@/lib/DTOs/StrapiLink";
import { StrapiSvg } from "@/lib/DTOs/StrapiSvg";
import { Project } from "@/lib/domain/project";
import { Skill } from "@/lib/domain/skill";
import { StrapiClient } from "@/lib/infra/strapi/StrapiClient";
import type { Locale } from "@/lib/types/Locale";
import { LocalizedStrapiRepo } from "@/lib/types/LocalizedStrapiRepo";

class StrapiRepository extends LocalizedStrapiRepo<Project> {
  override async getAll(locale: Locale): Promise<Project[]> {
    const res = await StrapiClient.GetProjects({ locale });

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
          summary ? new StrapiBulletList(summary) : undefined,
          demo_url ?? undefined,
          await Promise.all(
            links?.map(async (resLink) => {
              const { text, url, icon } = resLink!;
              return new StrapiLink(
                text,
                url,
                icon?.data?.attributes?.url
                  ? await new StrapiSvg(icon?.data?.attributes?.url).fetchHtml()
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
                  ? await new StrapiSvg(svg?.data?.attributes?.url).fetchHtml()
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

export const ProjectStrapiRepo = new StrapiRepository();
