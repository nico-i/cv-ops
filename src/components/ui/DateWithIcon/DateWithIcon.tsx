import { Svg } from "@/components/ui/Svg";
import type { Locale } from "@/lib/types/Locale";
import { CalendarDays } from "lucide-react";

export interface DateWithIconProps {
  date: Date;
  locale: Locale;
}

export const DateWithIcon = ({ date, locale }: Readonly<DateWithIconProps>) => {
  return (
    <span className="inline-flex gap-1.5 items-center">
      <Svg Icon={CalendarDays} />
      {date.toLocaleDateString(locale, {
        year: "numeric",
        month: "short",
      })}
    </span>
  );
};
