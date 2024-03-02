import ejs from "ejs";
import fs from "fs";
import type { CVData, TemplateSource } from "./types";

export async function renderToHTML<T extends CVData>(
  data: T,
  templateSrc: TemplateSource
): Promise<string> {
  let templateStr: string;
  switch (templateSrc.type) {
    case "local":
      templateStr = await fs.promises.readFile(templateSrc.url, "utf-8");
      break;
    case "remote":
      templateStr = await fetch(templateSrc.url).then((res) => res.text());
      break;
    default:
      throw new Error("Invalid template source");
  }

  return ejs.render(templateStr, data);
}
