export class StrapiBulletList {
  public listItems: string[];

  constructor(resString: string) {
    this.listItems = resString.split("\n- ");
  }
}
