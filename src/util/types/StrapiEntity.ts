export abstract class StrapiEntity {
  id: string;

  constructor(id: string) {
    this.id = id;
  }

  equals(other: StrapiEntity): boolean {
    return this.id === other.id;
  }
}
