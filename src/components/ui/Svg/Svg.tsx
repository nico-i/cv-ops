import type { StrapiSvg } from "@/lib/DTOs/StrapiSvg";
import { cn } from "@/lib/utils";
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

export const Svg = ({ strapiSvg, className, Icon }: Readonly<SvgProps>) => {
  const classes = "max-h-4 w-4";

  if (Icon) return <Icon className={cn(classes, className)} />;

  return (
    <span
      dangerouslySetInnerHTML={
        strapiSvg ? { __html: strapiSvg.html || "" } : undefined
      }
      className={cn(classes, className)}
    />
  );
};
