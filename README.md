## FAVELAS

**The most complete list of all favelas of brazil by states**

### USAGE

```
import Favelas from 'favelas'

// the constructor is set to default to state ='rj' (Rio de Janeiro)
const favelas = new Favelas()


favelas.getAll()
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

### Methods

`getAll(): Favela[]` - Returns all favelas - full info
`getById(favelaId: number): Favela` - Returns a favela by the favelaId
`getByName(name: string): Favela[]` - A list of all favelas that match the name.
`getAllNames(): string[]` - The Name of all favelas
`getFavelasByComplex(complex: string): Favela[]` - Returns all favelas that are part of the complex matched.
`getFavelasByZone(zone: Zone): Favela[]` - Returns all favelas by the zone.
`getByNeighborhood(neighborhood: string): Favela[]` - Returns all favelas from the neighborhood passed.
`total(): number` - Return the amount of favelas in that state.
