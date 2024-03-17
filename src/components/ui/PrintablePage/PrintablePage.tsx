import clsx from "clsx";
import type { ReactNode } from "react";

export interface PrintablePageProps {
  children: ReactNode;
  className?: string;
}

export const PrintablePage = ({ children, className }: PrintablePageProps) => {
  return (
    <article
      className={clsx(
        "w-full lg:w-[215.9mm] h-full mx-auto p-1.5 bg-background shadow-lg shadow-black/40 print:shadow-none",
        className
      )}
    >
      {children}
    </article>
  );
};
