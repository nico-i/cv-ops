export class StrapiSvg {
  private _svgUrl: string;
  private _html?: string;

  constructor(url: string) {
    this._svgUrl = url;
  }

  async fetchHtml(): Promise<string> {
    if (!this._html) {
      this._html = await fetch(this._svgUrl).then((res) => res.text());
    }
    return this._html;
  }
}
