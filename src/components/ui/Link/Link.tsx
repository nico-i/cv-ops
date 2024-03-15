import { cn } from "@/lib/utils";

export interface LinkProps {
  children: React.ReactNode;
  className?: string;
  href: string;
}

export const Link = ({ children, href, className }: Readonly<LinkProps>) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className={cn(
      "font-medium text-primary underline underline-offset-4",
      className
    )}
  >
    {children}
  </a>
);
