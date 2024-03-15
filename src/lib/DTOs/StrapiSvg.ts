export class StrapiSvg {
  private _svgUrl: string;
  public html?: string;

  constructor(url: string) {
    this._svgUrl = url;
  }

  async fetchHtml(): Promise<this> {
    if (!this.html) {
      this.html = await fetch(this._svgUrl).then((res) => res.text());
    }
    return this;
  }
}
