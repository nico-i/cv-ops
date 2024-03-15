export abstract class StrapiCollection {
  id: string;
  
  constructor(id: string) {
    this.id = id;
  }

  equals(other: StrapiCollection): boolean {
    return this.id === other.id;
  }
}
