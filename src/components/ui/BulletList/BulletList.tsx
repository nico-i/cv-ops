import type { BulletListItem } from "@/components/ui/BulletListItem";
import clsx from "clsx";
import type { ReactElement } from "react";

export interface BulletListProps {
  children:
    | ReactElement<typeof BulletListItem>[]
    | ReactElement<typeof BulletListItem>;
  hideBullets?: boolean;
}

export const BulletList = ({
  children,
  hideBullets,
}: Readonly<BulletListProps>) => (
  <ul className={clsx("my-6 [&>li]:mt-2", !hideBullets && "ml-6 list-disc")}>
    {children}
  </ul>
);
