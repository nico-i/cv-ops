import { IconText } from "@/components/ui/IconText";
import { Svg } from "@/components/ui/Svg";
import type { Locale } from "@/lib/types/Locale";
import { CalendarDays } from "lucide-react";

export interface TimeWindowProps {
  locale: Locale;
  start: Date;
  end: Date | undefined;
}

export const TimeWindow = ({
  locale,
  start,
  end,
}: Readonly<TimeWindowProps>) => {
  return (
    <IconText ele="muted">
      <Svg Icon={CalendarDays} />
      <>
        {start.toLocaleDateString(locale, {
          year: "numeric",
          month: "short",
        })}
        &nbsp;&ndash;&nbsp;
        {end
          ? end.toLocaleDateString(locale, {
              year: "numeric",
              month: "short",
            })
          : "Present"}
      </>
    </IconText>
  );
};
