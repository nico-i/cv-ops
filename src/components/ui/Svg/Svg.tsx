import type { StrapiSvg } from "@/lib/DTOs/StrapiSvg";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";
import type { ComponentType } from "react";

export type SvgProps = {
  size?: "small" | "medium" | "large";
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
  size = "medium",
  className,
  Icon,
}: Readonly<SvgProps>) => {
  const stylesBySize = {
    small: "max-h-3 w-3",
    medium: "max-h-4 w-4",
    large: "h-5 w-5",
  };

  if (Icon) return <Icon className={cn(stylesBySize[size], className)} />;

  return (
    <span
      dangerouslySetInnerHTML={
        strapiSvg ? { __html: strapiSvg.html || "" } : undefined
      }
      className={cn(stylesBySize[size], className)}
    />
  );
};
