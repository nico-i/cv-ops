import { Svg } from "@/components/ui/Svg";
import { TimePin } from "@/components/ui/TimePin";
import { Typography } from "@/components/ui/Typography";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import type { ReactNode } from "react";

export interface XpAccordionProps {
  open: boolean;
  isCompleted: boolean;
  value: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children?: ReactNode;
}

export const TimelineAccordionItem = ({
  open,
  title,
  value,
  isCompleted,
  subtitle,
  children,
}: Readonly<XpAccordionProps>) => {
  return (
    <AccordionItem
      value={value}
      className="flex flex-col relative pl-6 bg-background"
    >
      <TimePin isCompleted={isCompleted} />
      <div className="flex flex-col gap-0.5 pb-3 z-10 bg-background">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <Typography
              ele="large"
              className="self-start flex items-center gap-1.5"
            >
              {title}
            </Typography>
            {subtitle}
          </div>
          <AccordionTrigger>
            <Svg
              Icon={ChevronDown}
              className={clsx(
                "transition-transform duration-200 print:hidden",
                open && "rotate-180"
              )}
            />
          </AccordionTrigger>
        </div>
      </div>
      <AccordionContent className="animate-accordion-down pb-9">
        {children}
      </AccordionContent>
    </AccordionItem>
  );
};
