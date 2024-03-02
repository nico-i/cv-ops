export interface CVData {
  name: string;
  email: string;
  phone: string;
  address: string;
  skills: string[];
  xp: string[];
  ed: string[];
}

export interface TemplateSource {
  type: "local" | "remote";
  url: string;
}

export interface Config<T extends CVData> {
  templateSource: TemplateSource;
  loader: () => Promise<T>;
}
