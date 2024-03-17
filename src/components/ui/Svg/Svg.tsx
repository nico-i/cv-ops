import type { StrapiSvg } from "@/lib/DTOs/StrapiSvg";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

export type SvgProps = {
  className?: string;
} & (
  | {
      strapiSvg: StrapiSvg;
      Icon?: never;
    }
  | {
      strapiSvg?: never;
      Icon: ComponentType<LucideProps>;
    }
);

export const Svg = ({
  strapiSvg,
  className = "w-4 h-max-4",
  Icon,
}: Readonly<SvgProps>) => {
  if (Icon) return <Icon className={className} />;

  return (
    <span
      dangerouslySetInnerHTML={
        strapiSvg ? { __html: strapiSvg.html || "" } : undefined
      }
      className={className}
    />
  );
};
