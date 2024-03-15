export interface BulletListItemProps {
  children: React.ReactNode;
}

export const BulletListItem = ({ children }: Readonly<BulletListItemProps>) => (
  <li>{children}</li>
);
