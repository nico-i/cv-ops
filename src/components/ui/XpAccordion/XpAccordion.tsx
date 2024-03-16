import { BulletList } from "@/components/ui/BulletList";
import { IconText } from "@/components/ui/IconText";
import { Svg } from "@/components/ui/Svg";
import { Typography } from "@/components/ui/Typography";
import type { Xp } from "@/lib/domain/xp";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";
import clsx from "clsx";
import {
  CalendarDays,
  ChevronDown,
  Circle,
  CircleDot,
  ExternalLink,
  Wrench,
} from "lucide-react";
import { useState } from "react";

export interface XpAccordionProps {
  localizedXps: Record<string, Xp>[];
  locale: string;
}

export const XpAccordion = ({
  localizedXps,
  locale,
}: Readonly<XpAccordionProps>) => {
  const [currentItem, setCurrentItem] = useState<string | null>(null);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      onValueChange={(newValue) => setCurrentItem(newValue)}
    >
      {localizedXps.map((xp) => {
        const currentLocaleXp = xp[locale];
        const isCurrentLocaleXp = currentLocaleXp?.id === currentItem;
        return (
          <AccordionItem
            key={currentLocaleXp?.id}
            value={currentLocaleXp?.id!}
            className="flex flex-col relative pl-6 bg-background"
          >
            <div className="flex flex-col items-center absolute h-full pt-1.5 top-0 left-0">
              {currentLocaleXp?.end ? (
                <Svg Icon={CircleDot} />
              ) : (
                <Svg Icon={Circle} />
              )}
              <div className="w-[0.1rem] bg-current h-full -mt-[1px] rounded-full" />
            </div>
            <div className="flex flex-col gap-0.5 pb-3 z-10 bg-background">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <Typography
                    ele="large"
                    className="self-start flex items-center gap-1.5"
                  >
                    {currentLocaleXp?.company}
                    <a
                      href={currentLocaleXp?.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Svg Icon={ExternalLink} />
                    </a>
                  </Typography>

                  <div className="flex flex-col">
                    <IconText ele="muted">
                      <Svg Icon={Wrench} />
                      {currentLocaleXp?.position}
                    </IconText>
                    <IconText ele="muted">
                      <Svg Icon={CalendarDays} />
                      <>
                        {currentLocaleXp?.start.toLocaleDateString(locale, {
                          year: "numeric",
                          month: "short",
                        })}
                        &nbsp;&ndash;&nbsp;
                        {currentLocaleXp?.end
                          ? currentLocaleXp?.end.toLocaleDateString(locale, {
                              year: "numeric",
                              month: "short",
                            })
                          : "Present"}
                      </>
                    </IconText>
                  </div>
                </div>
                <AccordionTrigger>
                  <Svg
                    Icon={ChevronDown}
                    className={clsx(
                      "transition-transform duration-200 print:hidden",
                      isCurrentLocaleXp && "rotate-180"
                    )}
                  />
                </AccordionTrigger>
              </div>
            </div>
            <AccordionContent className="pb-6 animate-accordion-down">
              {currentLocaleXp?.info?.listItems && (
                <BulletList>
                  {currentLocaleXp?.info?.listItems.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </BulletList>
              )}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
