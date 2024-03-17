export class StrapiSvg {
  private _svgUrl: string;
  public html?: string;

  constructor(url: string) {
    this._svgUrl = url;
  }

  async fetchHtml(): Promise<this> {
    if (!this.html) {
      const fetchedHtml = await fetch(this._svgUrl).then((res) => res.text());
      // TODO: Remove <title> in CMS instead of here
      this.html = fetchedHtml.replace(/<title>.*<\/title>/, "");
    }
    return this;
  }
}
