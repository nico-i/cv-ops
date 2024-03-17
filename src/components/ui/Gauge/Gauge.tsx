import type { ReactNode } from "react";

export interface GaugeProps {
  radius: number;
  strokeWidth?: number;
  children?: ReactNode;
  percentage: number;
}
export const Gauge = ({ percentage, radius }: GaugeProps) => {
  var circumference = radius * 2 * Math.PI;

  const offset = circumference - (percentage / 100) * circumference;
  return (
    <svg width="120" height="120">
      <circle
        strokeDashoffset={offset}
        style={{
          transition: " 0.35s stroke-dashoffset",
          transform: "rotate(-270deg)",
          transformOrigin: "50% 50%",
        }}
        strokeDasharray={`${circumference} ${circumference}`}
        stroke="black"
        stroke-width="4"
        fill="transparent"
        r={radius}
        cx="60"
        cy="60"
      />
    </svg>
  );
};
