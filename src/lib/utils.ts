import { markdown } from "@astropub/md";

export async function fetchSvgHtml(url: string): Promise<string> {
  const fetchedHtml = await fetch(url).then((res) => res.text());
  // TODO: Remove <title> in CMS instead of here
  return fetchedHtml.replace(/<title>.*<\/title>/, "");
}

export async function parseMdBulletListToHtml(
  resString: string
): Promise<string[]> {
  let resStringNoPrefix = resString.replaceAll("- ", "");

  return await Promise.all(
    resStringNoPrefix.split("\n").map(async (liStr) => {
      const mdStr = await markdown(liStr);
      return mdStr.toString();
    })
  );
}
