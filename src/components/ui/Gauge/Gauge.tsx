import type { ReactNode } from "react";

export interface GaugeProps {
  radius: number;
  strokeWidth?: number;
  children?: ReactNode;
  percentage: number;
}
export const Gauge = ({
  percentage,
  radius,
  strokeWidth = 4,
  children,
}: GaugeProps) => {
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;
  const size = radius * 2 + strokeWidth;
  return (
    <div className="relative flex justify-center items-center">
      <svg height={size} width={size} className="relative">
        <circle
          strokeDashoffset={offset}
          className="transition-[stroke-dashoffset] duration-300 ease-in-out rotate-90 origin-center"
          strokeDasharray={`${circumference} ${circumference}`}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx="50%"
          cy="50%"
        />
      </svg>
      <div className="absolute -mt-1">{children}</div>
    </div>
  );
};
