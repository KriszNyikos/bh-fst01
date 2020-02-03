
# Mileage

Számítsuk ki az utazásaink során megtett légikilométereket!

    Mileage
    --------------------------------
    calculate(trips: []Trip): number
    --------------------------------

## calculate(trips: []Trip): number

Az átadott trips tömbben található utak összes megtett légikilométerét számítja ki.

# Trip

Egy utazást ír le. Egy utazás paraméterei:

- honnan: from
- hova: to
- átszállás: thru

Egy állomásról mehetünk közvetlenül vagy átszállással.
Ha átszállással utazunk, feltételezzük, hogy visszafelé
is ugyanott szállunk át.

A mileage művelet egy utazás során megtett légikilométerek
számát adja meg.

    Trip
    -----------------
    from: string
    to: string
    thru: string

    constructor(
        from: string,
        to: string,
        thru: string
    )
    mileage(): number
    -----------------

# distances

Az állomások közötti távolságokat egy globális distances objektum
tárolja.

# példa

```js
const distances = {
    'BUD':{
        'GTW': 2000,
        'MNC': 1000
    },
    'MNC':{
        'GTW': 1500
    }
}

// ...

const mileage = new Mileage()
const trips = [new Trip('BUD', 'GTW'), new Trip('BUD', 'GTW', 'MNC')]

console.log(mileage.calculate(trips)) // A várt eredmény 9000
// BUD -> GTW közvetlenül: 2000, BUD -> MNC -> GTW átszállással: 1000 + 1500
```