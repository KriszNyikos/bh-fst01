# Auto feladat

implementaljunk egy autot reprezentalo osztalyt

# Auto

## constructor
Legyen harom bemeno parameter, `model`, `year`, `type`, ahol a 
 - model: pl bmw, vw, audi, str
 - year: gyartas eve
 - type: pl bmw eseten 218i, auti eseten mondjuk S5, vw eseten Arteon stb
  
tovabba legyen egy property, ami a `tank` allapotat mutatja, default legyen 100.

## move(): void

`move` metodus meghivasakor ha a `tank` nem nulla, akkor megy az auto, levonunk metodus hivasonkent 2 egyseget a `tank`-bol.
`tank` nem lehet kevesebb mint 0, ha nulla, akkor dobjunk `Error`-t.

## refill(amount: number): void

toltse fel a `tank`-ot adott egyseggel (`amount`). nem tolthetunk a `tank`-ba tobbet ha a mertekekegyseg 100.

## tankStatus(): string

Adja vissza a `tank` toltottsegi allapotat az alabbiak szerint:
 - ha ures, akkor adja vissza a kovetkezo stringet: `"empty"`
 - ha tele, akkor addja vissza a kovetkezo stringet: `"full"`
 - ha 50 a `tank` egysege, akkor adja vissza: `"half"`
 - ha kisebb mint 50 akkor `"less than half"`
 - ha tobb mint 50 akkor `"more than 50"`