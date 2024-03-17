import type { StrapiSvg } from "@/lib/DTOs/StrapiSvg";
import { cn } from "@/lib/utils";
import type { LucideProps } from "lucide-react";
import type { ComponentType, ReactNode } from "react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export type SvgProps = {
  className?: string;
  children?: ReactNode;
  size?: "md" | "lg";
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
  className,
  Icon,
  children,
  size = "md",
}: Readonly<SvgProps>) => {
  const classesBySize = {
    md: "w-4 h-4",
    lg: "w-6 h-6",
  };

  const classes = classesBySize[size];

  if (Icon) return <Icon className={cn(classes, className)} />;

  const icon = (
    <span
      dangerouslySetInnerHTML={
        strapiSvg ? { __html: strapiSvg.html || "" } : undefined
      }
      className={cn(classes, className)}
    />
  );

  if (children) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>{icon}</TooltipTrigger>
          <TooltipContent>{children}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return icon;
};
