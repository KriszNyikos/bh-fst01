# 2020. január 09., csütörtök


[előző alkalom](../20200107) [következő alkalom](../20200111)

# Ismétlés: ES6 modulok

- Mi az ES6 modul szisztéma két legfontosabb kulcsszava?
- Miért léteznek alternatív modularizációs megoldások (pl. CommonJS),
  ha egyszer adottak az ES6 modulok?
- Hogyan tudom az ES6 modul szintaxist használni egy Node.js projektben?
- Lehetséges-e dinamikusan betöltenem egy modult CommonJS-sel? És az ES6 modul
  szintaxissal?

## 1. Írjunk egy math modult

Két exportált függvénye van, egy `sum` és egy `product` függvény

a `sum` és a `product` is egy variadikus függvény

a `sum` az átadott paraméterek összegét adja vissza

a `product` a megadott paraméterek szorzatát

## 2. írjunk egy `logger` modult

a `Logger` osztály az egyetlen exportált eleme a modulnak

A `Logger` osztály rendelkezik egy `box` metódussal,
amely egy értéket vár (pl. 5) és ezt az értéket 
egy csillagokkal rajzolt dobozban írja ki

a Logger kontruktorában megadhatjuk, hogy hány karakter
széles legyen a doboz


```js
const logger = new Logger(27) // 27 a konstruktroban
logger.box(math.sum(1,2,3))


// output:
*************************** // 27 széles doboz
* 6                       *
***************************
```

# Funkcionális JavaScript

- Funkcionális programozás: függvény orientált (vs. objektum orientált)
  - függvények: egyértelmű (determinisztikus) leképezések
  - OOP metódusok: mellékhatással bíró műveletek
    - mellékhatás: a függvény lokális változóit túlélő állapottér módosulás
  - probléma a mellékhatásokkal: nehezebbé teszik a program (így a programhibák) lekövetését
  - gyakorlati jelentősség:
    - program helyességének bizonyíthatósága
    - triviális párhuzamosíthatóság
  - elméleti háttér
    - 1930-as évek, Alonzo Church: lambda kalkulus
    - Church-Turing tézis: "minden program megírható pusztán rekurzív függvényekkel"
- Deklaratív vs. imperatív: for ciklus vs filter és társai
- Miért nem funkcionális minden program, programnyelv?
- Funkcionális programozási alapkövek
  - magasabbrendű függvények: függvényt előállító vagy fogadó függvények
  - objektumok állapotának megváltoztathatatlansága: immutability
  - pure functions: mellékhatásmentes függvények

# Objektum orientált vs funkcionális kód

Probléma: korrumpált adatok propagálódása
```js
class Account {
    // egyéb mellékhatásos metódusok

    applyInterest() {
        this.balance = this.balacne * 1.01 // elgépelés!
    }

    // egyéb mellékhatásos metódusok
}

const acc = new Account()

// egyéb mellékhatásos metódushívások 

acc.applyInterest()

// egyéb mellékhatásos metódushívások

console.log(acc.balance)

// Hogy derítjük ki, hol romlott el az érték?
// Bármelyik metódus elronthatta, amelyik a this.balance
// értéket manipulálja! Még rosszabb: bárki elronthatta,
// aki meghívta a "bűnös metódust"!

```

némileg funkcionálisabb megoldás: 

```js
// function deposit ...

function applyInterest(balance) {
    return balacne * 1.01 // ReferenceError
}

class Account {
    // constructor
}

const acc = new Account()

// egyéb mellékhatásos metódushívások 

acc.balance = deposit(acc.balance, 10000)

// egyéb mellékhatásos metódushívások 

acc.balance = applyInterest(acc.balance)

// egyéb mellékhatásos metódushívások

// Világos, hogy a hiba csak ott lehet, ahol módosítjuk az
// acc.balance értéket


```

# Deklaratív vs. imperatív kód

```js
// imperatív kód: utasítjuk a gépet, hogy mit csináljon
options() {

        let results = [];

        for (let i = 0; i < this._restaurants.length; i++) {
            const restaurant = this._restaurants[i];
            let ok = true;

            for (let j = 0; j < this._guests.length; j++) {
                const disprefs = this._guests[j].dispreferences();

                if (restaurant.recommendations(disprefs).length === 0) {
                    ok = false;
                }
            }

            if (ok) {
                results.push(restaurant);
            }
        }

        return results;
    }
```

```js
// deklaratív kód: megmondjuk, mit szeretnénk és rábízzuk a függvényekre, hogy tegyék a dolgukat
options() {
    return this._restaurants.filter(
        restaurant => this._guests.every(
            guest => restaurant.recommendations(guest.dispreferences()).length > 0
        )
    );
}
```

# Magasabbrendű függvények

Függvényt előállító vagy fogadó függvények

Néhány fontos példa:
- Array.prototype.forEach -- kakukktojás: nem mellékhatásmentes!
- Array.prototype.every
- Array.prototype.filter
- Array.prototype.find
- Array.prototype.map
- Array.prototype.reduce

# Gyakorlatok

## Magasabbrendű függvények implementálása

- Array.prototype.forEach
- Array.prototype.every
- Array.prototype.filter
- Array.prototype.find
- Array.prototype.map
- Array.prototype.reduce

## Feladatok funkcionális megoldása

### Az extrovertáltak (házi feladat, 8 pont)

Keressük meg egy baráti társaságban azokat az embereket, akik mindenkit ismernek a társaságból.

```js
class Person {
    constructor(name, friends) {
        this.name = name
        this.friends = friends
    }
}
```

```js
const jenny = new Person('Jenny')
const frank = new Person('Frank')
const steve = new Person('Steve')

jenny.friends = [frank]
frank.friends = [jenny, steve]
steve.friends = [frank]

const party = [steve, frank, jenny]

party.filter(...) // extrovertáltak: [frank]

```


