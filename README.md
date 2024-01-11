## FAVELAS

**The most complete list of all favelas of brazil by states**

### USAGE

```js
import Favelas from "favelas";

// the constructor is set to default to state ='rj' (Rio de Janeiro)
const favelas = new Favelas();

favelas.getAll();
/**
[
    {
    id: 1,
    name: 'Metral',
    complex: 'Vila Kennedy',
    zone: 'oeste',
    neighborhoods: 'Bangu'
    },
    {...}
]
**/
```

## TYPES

```js
type Favela = {
  id: number,
  name: string,
  complex: string,
  zone: Zone,
  neighborhoods: string,
};

type State = "rj" | "sp";

type Zone = "sul" | "oeste" | "central" | "norte" | "leste";
```

## API

```js
getAll(): Favela[]
```

Returns all favelas - full info

```js
getById(favelaId: number): Favela
```

Returns a favela by the `favelaId``

```js
getByName(name: string): Favela[]
```

A list of all favelas that match the name.

```js
getAllNames(): string[]
```

The name of all favelas

```js
getFavelasByComplex(complex: string): Favela[]
```

it returns all favelas that are part of the complex matched.

```js
getFavelasByZone(zone: Zone): Favela[]
```

it returns all favelas by the zone.

```js
getByNeighborhood(neighborhood: string): Favela[]
```

it returns all favelas from the neighborhood passed.

```js
total(): number
```

Return the amount of favelas in that state.
