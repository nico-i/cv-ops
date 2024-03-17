export class StrapiBulletList {
  public listItems: string[];

  constructor(resString: string) {
    let resStringNoPrefix = resString.replaceAll("- ", "");

    this.listItems = resStringNoPrefix.split("\n");
  }
}
