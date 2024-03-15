import type { SvgProps } from "@/components/ui/Svg";
import type { ReactElement, ReactNode } from "react";

export interface IconTextProps {
  children: [ReactElement<SvgProps>, ReactNode];
}

export const IconText = ({ children }: Readonly<IconTextProps>) => {
  return <span className="inline-flex items-center gap-2">{children}</span>;
};
