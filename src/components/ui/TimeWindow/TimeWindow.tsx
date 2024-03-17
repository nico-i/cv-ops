import { DateWithIcon } from "@/components/ui/DateWithIcon";
import { Typography } from "@/components/ui/Typography";
import type { Locale } from "@/lib/types/Locale";

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
    <Typography ele="muted" className="inline-flex gap-1.5 items-center">
      <DateWithIcon date={start} locale={locale} />
      <span>&ndash;</span>
      {end
        ? end.toLocaleDateString(locale, {
            year: "numeric",
            month: "short",
          })
        : "Present"}
    </Typography>
  );
};
