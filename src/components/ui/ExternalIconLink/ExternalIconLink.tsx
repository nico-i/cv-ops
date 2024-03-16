import { Svg } from "@/components/ui/Svg";
import { ExternalLink } from "lucide-react";

export interface ExternalIconLinkProps {
  href: string;
}

export const ExternalIconLink = ({ href }: Readonly<ExternalIconLinkProps>) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="text-muted-foreground hover:text-primary inline-flex"
  >
    <Svg Icon={ExternalLink} />
  </a>
);
