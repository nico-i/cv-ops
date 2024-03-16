import { BulletList } from "@/components/ui/BulletList";
import { ExternalIconLink } from "@/components/ui/ExternalIconLink";
import { IconText } from "@/components/ui/IconText";
import { Svg } from "@/components/ui/Svg";
import { TimelineAccordionItem } from "@/components/ui/TimelineAccordionItem";
import type { Xp } from "@/lib/domain/xp";
import { Accordion } from "@radix-ui/react-accordion";
import { Building2, CalendarDays } from "lucide-react";
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
          <TimelineAccordionItem
            key={currentLocaleXp?.id}
            open={isCurrentLocaleXp}
            title={currentLocaleXp?.position}
            subtitle={
              <div className="flex gap-3">
                <IconText ele="muted">
                  <Svg Icon={Building2} />
                  <div className="flex items-center">
                    {currentLocaleXp?.company}&nbsp;
                    {currentLocaleXp?.url && (
                      <ExternalIconLink href={currentLocaleXp?.url} />
                    )}
                  </div>
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
            }
            value={currentLocaleXp?.id!}
            isCompleted={currentLocaleXp?.end !== undefined}
          >
            {currentLocaleXp?.info?.listItems && (
              <BulletList>
                {currentLocaleXp?.info?.listItems.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </BulletList>
            )}
          </TimelineAccordionItem>
        );
      })}
    </Accordion>
  );
};
