import type { SvgProps } from "@/components/ui/Svg";
import { Typography } from "@/components/ui/Typography";
import type { TypographyProps } from "@/components/ui/Typography/Typography";
import type { ReactElement, ReactNode } from "react";

export interface IconTextProps {
  children: [ReactElement<SvgProps>, ReactNode];
  ele?: TypographyProps["ele"];
}

export const IconText = ({
  children,
  ele = "span",
}: Readonly<IconTextProps>) => {
  return (
    <Typography ele={ele} className="inline-flex items-center gap-2">
      {children}
    </Typography>
  );
};
