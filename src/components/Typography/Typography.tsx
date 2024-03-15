import React, { type ElementType } from "react";

interface TypographyProps extends React.HTMLProps<HTMLElement> {
  ele: "p" | "h1" | "h2" | "h3" | "h4" | "code";
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  ele = "p",
  children,
}) => {
  const Wrapper: ElementType = ele;

  const classesByEle: Record<TypographyProps["ele"], string> = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
    code: "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold",
  };

  return <Wrapper className={classesByEle[ele]}>{children}</Wrapper>;
};
