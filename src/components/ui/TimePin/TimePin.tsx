import { Svg } from "@/components/ui/Svg";
import { Circle, CircleDot } from "lucide-react";

export interface TimePinProps {
  isCompleted: boolean;
}

export const TimePin = ({ isCompleted }: Readonly<TimePinProps>) => {
  return (
    <div className="absolute h-full pt-1.5 top-0 left-0 overflow-clip">
      {isCompleted ? <Svg Icon={CircleDot} /> : <Svg Icon={Circle} />}
      <div className="w-[0.1rem] bg-current h-full mx-auto rounded-full -mt-1.5" />
    </div>
  );
};
