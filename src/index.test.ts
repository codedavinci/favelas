import Favelas from "./index";

const TOTAL_FAVELAS = 880;

describe("Favela - Module", () => {
  const favelasRj = new Favelas();

  describe("getAll", () => {
    it("it should be able to get all favelas - full details", () => {
      const all = favelasRj.getAll();
      const PROPERTIES_EXPECTED = [
        "id",
        "name",
        "neighborhoods",
        "zone",
        "complex",
      ];

      expect(all.length).toBe(TOTAL_FAVELAS);

      Object.keys(all[0]).forEach((property) => {
        expect(PROPERTIES_EXPECTED.includes(property)).toBeTruthy();
      });
    });
  });

  describe("getById", () => {
    it("it should be return a single favela by id", () => {
      expect(favelasRj.getById(1)).toBeTruthy();
    });

    it("it should be return undefined if not found", () => {
      expect(favelasRj.getById(1000)).toBeUndefined();
    });
  });

  describe("getAllNames", () => {
    it("it should return the names of all favelas only", () => {
      const allNames = favelasRj.getAllNames();

      expect(allNames.length).toBe(TOTAL_FAVELAS);
      expect(typeof allNames[0]).toBe("string");
    });
  });

  describe("getByName", () => {
    it("it should return all favelas that matches the name", () => {
      const allFavelasFound = favelasRj.getByName("Pantanal");

      expect(allFavelasFound.length).toBe(4);
    });

    it("it should return empty array if none is found", () => {
      const allFavelasFound = favelasRj.getByName("foo");

      expect(allFavelasFound).toEqual([]);
    });
  });

  describe("getFavelasByComplex", () => {
    it("it should return all favelas by complex", () => {
      const favelas = favelasRj.getFavelasByComplex("Vila Kennedy");

      expect(favelas.length).toBe(10);
    });
  });

  describe("getFavelasByZone", () => {
    it("it should return all favelas by zone", () => {
      const favelas = favelasRj.getFavelasByZone("sul");

      expect(favelas.length).toBe(63);
    });

    it("it should return empty array if not found any", () => {
      //@ts-ignore
      const favelas = favelasRj.getFavelasByZone("foo");

      expect(favelas).toEqual([]);
      expect(favelas.length).toBe(0);
    });
  });

  describe("getByNeighborhood", () => {
    it("it should return all favelas by neighborhood", () => {
      const favelas = favelasRj.getByNeighborhood("Bangu");

      expect(favelas.length).toBe(35);
    });

    it("it should return empty array if not found any", () => {
      const favelas = favelasRj.getByNeighborhood("foo");

      expect(favelas).toEqual([]);
      expect(favelas.length).toBe(0);
    });
  });

  describe("Total", () => {
    it("it should the amount of favelas in the whole city", () => {
      expect(favelasRj.total()).toBe(TOTAL_FAVELAS);
    });
  });
});
