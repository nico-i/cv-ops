import clsx from "clsx";
import type { ReactNode } from "react";

export interface PrintablePageProps {
  children: ReactNode;
  className?: string;
}

export const PrintablePage = ({ children, className }: PrintablePageProps) => {
  return (
    <article className={clsx("w-[215.9mm] h-[297mm] mx-auto border border-pink-700 p-1.5", className)}>
      {children}
    </article>
  );
};
