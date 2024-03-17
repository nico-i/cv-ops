import type { StrapiSvg } from "@/lib/DTOs/StrapiSvg";
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
  children,
}: Readonly<SvgProps>) => {
  if (Icon) return <Icon className={className} />;

  const icon = (
    <span
      dangerouslySetInnerHTML={
        strapiSvg ? { __html: strapiSvg.html || "" } : undefined
      }
      className={className}
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
