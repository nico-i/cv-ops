import type { ProjectLink } from "@interfaces/ProjectLink";
import type { Skill } from "@interfaces/Skill";
import { StrapiImage } from "@interfaces/StrapImage";
import type { Locale } from "@util/Locale";
import { LocalizedCollection } from "@util/LocalizedCollection";

export class Project extends LocalizedCollection<{
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
}> {
  constructor(strapiApiResData: any) {
    super((strapiApiResData: any) => {
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
      } = strapiApiResData.attributes;

      return {
        locale,
        headerImage: new StrapiImage(headerImage.data.attributes),
        seoImage: new StrapiImage(seoImage.data.attributes),
      };
    }, strapiApiResData);
  }
}

const example = {
  id: 1,
  attributes: {
    title: "www.compressed.studio",
    createdAt: "2023-03-31T16:00:49.359Z",
    updatedAt: "2024-01-05T14:43:35.177Z",
    locale: "en",
    summary:
      "- Showreel website for a Film Studio based in Hamburg, Germany\n- Collaboration with the client to design initial mock-ups\n- Set up a headless WordPress instance\n- Configuration of custom content-types with the Advanced Custom Fields WordPress addon\n- Implementation of a dynamically customizable theme with TailwindCSS\n- Custom animations with pure CSS\n- Frontend development with Next.js and TypeScript\n- Responsive user experience on both mobile and desktop devices\n- Installation of a CD-pipeline in Netlify\n- Configured deployment triggers upon CMS updates via web-hooks",
    slug: "portfolio",
    seo_title: "Nico Ismaili's Portfolio | compressed.studio",
    tldr: "A responsive showreel website using Next.js, TypeScript, and TailwindCSS, with custom animations and content managed via headless WordPress, hosted on Netlify.",
    start: "2022-12-04",
    end: "2023-03-09",
    work_hours: 80,
    url: "https://www.compressed.studio/",
    header_image: {
      data: {
        id: 14,
        attributes: {
          name: "1080-compressed",
          alternativeText: "A screenshot of the compressed.studio website",
          caption: null,
          width: 1920,
          height: 1080,
          formats: {
            thumbnail: {
              name: "thumbnail_Screen Shot 2024-01-03 at 17.14.52.png",
              hash: "thumbnail_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
              ext: ".png",
              mime: "image/png",
              path: null,
              width: 245,
              height: 138,
              size: 50.45,
              url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300727/thumbnail_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6.png",
              provider_metadata: {
                public_id:
                  "thumbnail_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
                resource_type: "image",
              },
            },
            medium: {
              name: "medium_Screen Shot 2024-01-03 at 17.14.52.png",
              hash: "medium_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
              ext: ".png",
              mime: "image/png",
              path: null,
              width: 750,
              height: 422,
              size: 343.6,
              url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300727/medium_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6.png",
              provider_metadata: {
                public_id:
                  "medium_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
                resource_type: "image",
              },
            },
            small: {
              name: "small_Screen Shot 2024-01-03 at 17.14.52.png",
              hash: "small_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
              ext: ".png",
              mime: "image/png",
              path: null,
              width: 500,
              height: 281,
              size: 166.52,
              url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300727/small_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6.png",
              provider_metadata: {
                public_id:
                  "small_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
                resource_type: "image",
              },
            },
            large: {
              name: "large_Screen Shot 2024-01-03 at 17.14.52.png",
              hash: "large_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
              ext: ".png",
              mime: "image/png",
              path: null,
              width: 1000,
              height: 563,
              size: 580.91,
              url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300727/large_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6.png",
              provider_metadata: {
                public_id:
                  "large_Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
                resource_type: "image",
              },
            },
          },
          hash: "Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
          ext: ".png",
          mime: "image/png",
          size: 384.38,
          url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300727/Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6.png",
          previewUrl: null,
          provider: "cloudinary",
          provider_metadata: {
            public_id: "Screen_Shot_2024_01_03_at_17_14_52_7482dc1fc6",
            resource_type: "image",
          },
          createdAt: "2024-01-03T16:52:08.196Z",
          updatedAt: "2024-01-03T16:52:25.461Z",
        },
      },
    },
    seo_image: {
      data: {
        id: 13,
        attributes: {
          name: "og-compressed",
          alternativeText: "A screenshot of the compressed.studio website",
          caption: null,
          width: 1200,
          height: 630,
          formats: {
            thumbnail: {
              name: "thumbnail_Untitled.png",
              hash: "thumbnail_Untitled_74cd71ce9d",
              ext: ".png",
              mime: "image/png",
              path: null,
              width: 245,
              height: 129,
              size: 45.87,
              url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300725/thumbnail_Untitled_74cd71ce9d.png",
              provider_metadata: {
                public_id: "thumbnail_Untitled_74cd71ce9d",
                resource_type: "image",
              },
            },
            small: {
              name: "small_Untitled.png",
              hash: "small_Untitled_74cd71ce9d",
              ext: ".png",
              mime: "image/png",
              path: null,
              width: 500,
              height: 263,
              size: 152.82,
              url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300725/small_Untitled_74cd71ce9d.png",
              provider_metadata: {
                public_id: "small_Untitled_74cd71ce9d",
                resource_type: "image",
              },
            },
            medium: {
              name: "medium_Untitled.png",
              hash: "medium_Untitled_74cd71ce9d",
              ext: ".png",
              mime: "image/png",
              path: null,
              width: 750,
              height: 394,
              size: 314.36,
              url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300725/medium_Untitled_74cd71ce9d.png",
              provider_metadata: {
                public_id: "medium_Untitled_74cd71ce9d",
                resource_type: "image",
              },
            },
            large: {
              name: "large_Untitled.png",
              hash: "large_Untitled_74cd71ce9d",
              ext: ".png",
              mime: "image/png",
              path: null,
              width: 1000,
              height: 525,
              size: 528.41,
              url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300725/large_Untitled_74cd71ce9d.png",
              provider_metadata: {
                public_id: "large_Untitled_74cd71ce9d",
                resource_type: "image",
              },
            },
          },
          hash: "Untitled_74cd71ce9d",
          ext: ".png",
          mime: "image/png",
          size: 158.01,
          url: "https://res.cloudinary.com/inico-cloud/image/upload/v1704300725/Untitled_74cd71ce9d.png",
          previewUrl: null,
          provider: "cloudinary",
          provider_metadata: {
            public_id: "Untitled_74cd71ce9d",
            resource_type: "image",
          },
          createdAt: "2024-01-03T16:52:06.545Z",
          updatedAt: "2024-01-03T16:52:32.384Z",
        },
      },
    },
    technologies: {
      data: [
        {
          id: 26,
          attributes: {
            summary:
              "React is a JavaScript library used for building user interfaces, focusing on component-based architecture and virtual DOM manipulation.\n",
            createdAt: "2023-03-31T14:14:58.340Z",
            updatedAt: "2024-01-03T17:28:37.358Z",
            locale: "en",
            name: "React",
            proficiency: 90,
            priority: 8,
            url: "https://react.dev/",
          },
        },
        {
          id: 55,
          attributes: {
            summary:
              "TypeScript is a programming language developed by Microsoft, which extends JavaScript by adding static types to the code, helping developers to catch errors early and enhance code quality and maintainability.",
            createdAt: "2024-01-03T17:41:09.618Z",
            updatedAt: "2024-01-08T21:53:02.774Z",
            locale: "en",
            name: "TypeScript",
            proficiency: 95,
            priority: 1,
            url: "https://www.typescriptlang.org/",
          },
        },
        {
          id: 30,
          attributes: {
            summary:
              "Next.js is a React-based framework used for building server-side rendered and statically generated web applications.\n",
            createdAt: "2023-03-31T14:16:34.439Z",
            updatedAt: "2024-01-03T17:31:32.185Z",
            locale: "en",
            name: "Next.js",
            proficiency: 95,
            priority: 6,
            url: "https://nextjs.org/",
          },
        },
        {
          id: 28,
          attributes: {
            summary:
              "TailwindCSS is a utility-first CSS framework that provides pre-defined classes for rapidly building custom UI designs.",
            createdAt: "2023-03-31T14:15:37.067Z",
            updatedAt: "2024-01-03T17:29:16.099Z",
            locale: "en",
            name: "TailwindCSS",
            proficiency: 95,
            priority: 1,
            url: "https://tailwindcss.com/",
          },
        },
        {
          id: 57,
          attributes: {
            summary:
              "WordPress is a popular open-source content management system (CMS) that enables users to create and manage websites easily, known for its flexibility, user-friendliness, and a vast array of themes and plugins.",
            createdAt: "2024-01-03T17:44:07.128Z",
            updatedAt: "2024-01-03T17:45:43.913Z",
            locale: "en",
            name: "Wordpress",
            proficiency: 80,
            priority: 1,
            url: "https://wordpress.org/",
          },
        },
        {
          id: 3,
          attributes: {
            summary:
              "Cascading Style Sheets (CSS) is a style sheet language used to describe the presentation of a document written in HTML.\n",
            createdAt: "2023-03-31T14:00:51.837Z",
            updatedAt: "2024-01-03T17:23:42.848Z",
            locale: "en",
            name: "CSS",
            proficiency: 90,
            priority: 1,
            url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
          },
        },
      ],
    },
    links: {
      data: [
        {
          id: 1,
          attributes: {
            url: "https://www.compressed.studio/",
            createdAt: "2024-01-05T10:49:23.253Z",
            updatedAt: "2024-01-05T14:49:43.039Z",
            text: "Website",
          },
        },
      ],
    },
    localizations: {
      data: [
        {
          id: 2,
          attributes: {
            title: "www.compressed.studio",
            createdAt: "2023-03-31T16:05:32.828Z",
            updatedAt: "2024-01-05T14:43:35.226Z",
            locale: "de",
            summary:
              "- Showreel-Website für ein Filmstudio in Hamburg, Deutschland\n- Kollaboratives Arbeiten an UX-Mockups\n- Einrichtung einer headless WordPress-Instanz\n- Konfiguration individueller Content-Types mit dem Advanced Custom Fields WordPress Addon\n- Implementierung eines, durch das eingerichtete CMS konfigurierbaren, Themes mit TailwindCSS\n- Implementierung benutzerdefinierter Animationen mit purem CSS\n- Frontend-Entwicklung mit Next.js und TypeScript\n- Responsives Design für mobile und Desktop-Geräte\n- Einrichten einer CD-Pipeline auf Netlify\n- Einrichten von CD-Triggern nach CMS-Updates via Web-Hooks",
            slug: "portfolio",
            seo_title: "Nico Ismaili's Portfolio | compressed.studio",
            tldr: "Responsive Showreel-Website für ein Hamburger Filmstudio entwickelt mit Next.js, TypeScript und TailwindCSS, inklusive benutzerdefinierter Animationen und Inhaltsverwaltung über headless WordPress, gehostet auf Netlify.",
            start: "2022-12-04",
            end: "2023-03-09",
            work_hours: 80,
            url: "https://www.compressed.studio/",
          },
        },
      ],
    },
  },
};