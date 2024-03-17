import { BulletList } from "@/components/ui/BulletList";
import { ExternalIconLink } from "@/components/ui/ExternalIconLink";
import { IconText } from "@/components/ui/IconText";
import { Svg } from "@/components/ui/Svg";
import { TimeWindow } from "@/components/ui/TimeWindow";
import { TimelineAccordionItem } from "@/components/ui/TimelineAccordionItem";
import type { Xp } from "@/lib/domain/xp";
import type { Locale } from "@/lib/types/Locale";
import { Accordion } from "@radix-ui/react-accordion";
import { Building2 } from "lucide-react";
import { useState } from "react";

export interface XpAccordionProps {
  localizedXps: Record<string, Xp>[];
  locale: Locale;
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
              <div className="flex flex-col lg:flex-row lg:gap-3">
                <IconText ele="muted">
                  <Svg Icon={Building2} />
                  <div>
                    {currentLocaleXp?.company}{" "}
                    {currentLocaleXp?.url && (
                      <ExternalIconLink href={currentLocaleXp?.url} />
                    )}
                  </div>
                </IconText>
                <TimeWindow
                  start={currentLocaleXp?.start!}
                  end={currentLocaleXp?.end}
                  locale={locale}
                />
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
