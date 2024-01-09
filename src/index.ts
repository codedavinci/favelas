type State = "rj" | "sp";

type Zone = "sul" | "oeste" | "central" | "norte" | "leste";

type Favela = {
  id: number;
  name: string;
  complex: string;
  zone: Zone;
  neighborhoods: string;
};

class Favelas {
  state: State;
  favelas: Favela[];

  constructor(state: State = "rj") {
    this.state = state;
    this.favelas = require(`./data/${state}.json`);
  }

  getAll(): Favela[] {
    return this.favelas;
  }

  getById(favelaId: number): Favela {
    return this.favelas.find((favela) => favela.id === favelaId);
  }

  getAllNames(): string[] {
    return this.favelas.map((favela) => favela.name);
  }

  getByName(name: string): Favela[] {
    return this.favelas.filter((favela) => favela.name === name);
  }

  getFavelasByComplex(complexName: string): Favela[] {
    return this.favelas.filter((favela) => favela.complex === complexName);
  }

  getFavelasByZone(zone: Zone): Favela[] {
    return this.favelas.filter((favela) => favela.zone === zone);
  }

  getByNeighborhood(neighborhood: string): Favela[] {
    return this.favelas.filter((favela) =>
      favela.neighborhoods.includes(neighborhood)
    );
  }

  total(): number {
    return this.favelas.length;
  }
}

export default Favelas;
