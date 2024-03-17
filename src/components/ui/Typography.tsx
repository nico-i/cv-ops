import { cn } from "@/lib/utils";
import React, { type ElementType } from "react";

export interface TypographyProps extends React.HTMLProps<HTMLElement> {
  ele:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "code"
    | "small"
    | "span"
    | "lead"
    | "large"
    | "muted";
  children?: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({
  ele = "p",
  children,
  className,
}) => {
  let Wrapper: ElementType;

  if (ele === "lead" || ele === "large" || ele === "muted") {
    Wrapper = "p";
  } else {
    Wrapper = ele;
  }

  const classesByEle: Record<TypographyProps["ele"], string> = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
    small: "text-sm font-medium leading-none",
    span: "leading-7",
    lead: "text-xl text-muted-foreground",
    large: "text-lg font-semibold",
    muted: "text-sm text-muted-foreground",
  };

  return (
    <Wrapper className={cn(classesByEle[ele], className)}>{children}</Wrapper>
  );
};
