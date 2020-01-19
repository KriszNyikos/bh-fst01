# Válaszold meg a kérdéseket

Válaszonként 1 pont

---

Mik azok az operátorok?

> Kifejezéseken végrehajtható műveleteket reprezentáló nyelvi elemek.

---

Mi az a shadowing? 

> Amikor két változónak ugyanaz az azonosítója és a láthatóságuk átfedésben van (pl. globális változó és függvény lokális változója), a szűkebb láthatóságú változó a saját szkópjában elfedi, "árnyékolja" a tágabb láthatóságú változót.

---
Mi az a konkatenáció

> Összefűzés. Stringek összefűzésére a + operátort használjuk, tömbökre a concat függvényt.

---

Mi a különbség a ++i és az i++ között?

> A i++ kifejezés értéke az i eredeti értéke a növelés előtt, a ++i értéke a már megnövelt érték.

---

Mi az alapértelmezett értéke egy inicializálatlan változónak?

> undefined

---

Mi a különbség a null és az undefiend között?

> Két külön típus. Az undefined az inicializálatlan, ismeretlen értékeket jelöli, míg a null kifejezetten egy hiányzó objektum jelölésére használatos.

---

Mit jelent az, hogy egy érték truthy vagy falsy? 

> Az automatikus típuskényszerítés során az egyes értékek logikai értékké konvertálásának eredménye alapján az eredeti érték truthy vagy falsy.

---

Mire a különbség a typeof és az instanceof között?

> A typeof egy érték típusát mondja meg, az instanceof pedig, hogy egy adott érték egy adott osztály példánya-e.

---

Mire való a new?

> Osztályok példányosítására, azaz adott osztályba tartozó objektumok létrehozására.

---

Mi a különbség a constructor és a konstruktor függvény között? 

> A constructor egy speciális metódus egy osztályon belül ES6-ban, a konstruktor függvény pedig egy olyan függvény, amely segítségével ES5-ben tudunk osztályokat definiálni. Az ES6 osztályok a háttérben valójában konstruktor függvények.

---

Mit jelent az, hogy a függvények elsőrendű nyelvi elemek?

> Azt, egy függvény egyben értékként is viselkedik, változóba elmenthető, paraméterként átadható, visszatérési értékként visszaadható.

---

Mi az a rekurzíó? 

> Amikor egy függvény meghívja önmagát. 

---

Mire való a break utasítás? 

> switch utasításban az egyes ágakon a végrehajtás megszakítására, illetve ciklus végrehajtásának azonnali megszakítására úgy, hogy a végrehajtás a ciklus után folytatódik.

---

Mire való a continue utasítás?

> ciklus aktuális iterációjának azonnali megszakítására úgy, hogy a végrehajtás a következő iterációnál folytatódik

---

 
Mire való a finally? hogy használjuk?

> try...catch szerkezet végére írható blokk, amely minden esetben lefut, akkor is, ha a try blokkból hiba érkezett és lefutott a catch blokk és akkor is, ha a try blokk hiba nélkül lefutott

---

Mit jelent az, hogy a switch lecsorgó (fallthrough)? 

> az egymást követő case ágakon végigszalad a vezérlés, ha nem írunk break utasítást a case ág végére

---



# Mutass rá a hibára és indokold meg, miért működik hibásan a program és írd le a javítást!

Hiba azonosítása 1 pont

Helyes indoklás 1 pont

Helyes javítás 1 pont

---

```js
let i = 0;
while(i < 10); {
   console.log(i);
   // hiányzó léptetés
}
```
## Indoklás

> az i ciklusváltozót sosem léptetjük, így végtelen ciklus lesz

## Javítás

> ```js
> let i = 0;
> while(i < 10); {
>   console.log(i);
>   i = i + 1;
> }
> ```

---

```js
// i konstansként lett deklarálva
for(const i = 0; i < 10; i++) {
  console.log(i)
}
```
## Indoklás

> konstans változóknak nem lehet felülírni az értékét, az i++ pedig egy i = i + 1 utasításnak felel meg

## Javítás

> ```js
> for(let i = 0; i < 10; i++) {
>   console.log(i)
> }
> ```

---

```js
let eredmeny
// nem írjuk vissza az i + 1 értéket i-be
for(let i = 0; i < 10; i + 1) {
  eredmeny = i;
 }

```

## Indoklás

> mivel nem írtuk vissza i-be az új értéket,
> végtelen ciklus lesz

## Javítás

> ```js
> let eredmeny
> for(let i = 0; i < 10; i = i + 1) {
>   eredmeny = i;
> }
> 
> ```

---

```js
// main.js
const hello = require('./hello')
console.log(hello())

// hello.js
// exports közvetlen felülírása
exports = function() { return 'hello' }
```
## Indoklás

> közvetlenül az exports változót írjuk felül
> a module.exports helyett, ezért voltaképpen
> nem exportálunk semmit!


## Javítás

> ```js
> // main.js
> const hello = require('./hello')
> console.log(hello())
>
> // hello.js
> module.exports = function() { return 'hello' }
> ```


---

```js
//main.js
//            hiányzó . karakter
const text = require('/text')
console.log(text)

// text.js
exports.text = "hello"
```
## Indoklás

> a require függvény paraméter string feloldása
> során . karakter jelzi, hogy egy relatív impoortot
> akarunk egy saját modulra

## Javítás

> ```js
> //main.js
> const text = require('./text')
> console.log(text)
> 
> // text.js
> exports.text = "hello"
> ```

---

```js
//main.js
const adder = require('./util').addder
console.log(addder(2,3)) // adder néven mententtük el az importált addder függvényt

//util.js
function addder(a, b) {
  return a + b
}

exports.addder = adder // a függvény neve három d-vel van
```
## Indoklás

> Mindkét helyen el vannak tévesztve az azonosítók, így hibát kapunk

## Javítás


> ```js
> //main.js
> const adder = require('./util').addder
> console.log(addder(2,3)) // adder néven mententtük > el az importált addder függvényt
> 
> //util.js
> function addder(a, b) {
>   return a + b
> }
> 
> exports.addder = adder // a függvény neve három > d-vel van
> ```

---

```js
// class foglalt szó!
let class = {
  constructor(name) {
    this.name = name
  }

  hi() { return `Hi, my name is ${this.name}` }
}
```
## Indoklás

> Minthogy a class foglalt szó, ilyen nevű változót nem deklarálhatunk. Máskülönben egy osztálydeklaráció meg nem így néz ki.

## Javítás


> ```js
> let obj = {
>   constructor(name) {
>     this.name = name
>   }
> 
>   hi() { return `Hi, my name is ${this.name}` }
> }
> ```

---

```js
class A {
  constructor(name) {
    this.name = name
  }
}

class B extends A {
    constructor(age) {
        // hiányzó name és super(name)
        this.age = age
    }   
}
```
## Indoklás

> Alosztályban definiált konstruktor esetén kötelező
> meghívni a szülőosztály konstruktorát

## Javítás

> ```js
> class A {
>   constructor(name) {
>     this.name = name
>   }
> }
> 
> class B extends A {
>     constructor(name, age) {
>         this.name = name
>         this.age = age
>     }   
> }
> ```

---

```js
class A {
  constructor(age) {
    age = 0 // hiányzó this
  }
}
```
## Indoklás

> A paraméterérték nullázása önmagában értelmetlen. 

## Javítás

> ```js
> class A {
>   constructor(age) {
>     this.age = age || 0
>   }
> }
> ```


---

```js
function r(n) {
  return r(n+1) // végtelen rekurzió
}
```
## Indoklás

> A rekurzív függvényeknek kell egy megállási eset,
> különben végtelen rekurziót eredményeznek.

## Javítás

> ```js
> function r(n) {
>   if (n < 10) return r(n+1) else return n
> }
> ```

---

# Jelöld meg az igaz kifejezéseket!

Válaszodat az opció végére írt 👈 emojival jelöld, például

> Mi az élet értelme?
>
> 1. élet értelme 42
> 2. programozás
> 3. mindkét válasz helyes 👈


Helyes válasz 1 pont

__Helytelen válasz -1 pont!__

---

1. {} == false
1. [] == false 👈
1. 'true' == true
1. 'false' == false
1. 0 == false 👈
1. null === false
1. !undefined === true 👈
1. !!1 == true 👈

---

1. "foo" == "foo" 👈
1. "foo" === "foo" 👈
1. 5 == "5" 👈
1. 5 === "5"
1. [1] == [1]
1. [1] === [1]
1. undefined == null 👈
1. undefined === null
1. null === null 👈
1. NaN === NaN

# Mi lesz a kifejezés eredménye és miért?

Válaszodat az opció végére írt 👈 emojival jelöld. Az indoklás egyszerű szövegként mehet a feladat szekciójába, például

> Mi lesz a kifejezés eredménye?
>
> ```js
> const fizu = 80000
> let eredmeny = fizu * 10
> ```
> 1. boldogság
> 2. hiba 👈
>
> ## Indoklás
> a const miatt a fizu nem módosítható

Helyes válasz 1 pont

__Helytelen válasz -1 pont!__

Indoklás 1 pont

---

```js
const c = 10
c++

let eredmeny = c
```

1. 11
1. 10
1. hiba 👈

## Indoklás

> konstansként deklarált változó értéke nem írható felül

---
```js
const t = []
t.push(10)

let eredmeny = t.length
```

1. 1 👈
1. 0
1. hiba

## Indoklás

> a t konstans változó értéke, a tömb referencia, nem változott azáltal, hogy hozzáadtunk egy elemet a tömbhöz

---

```js
let s = "123"
 
let eredmeny = s[2]
```

1. "3" 👈
1. 3
1. hiba


## Indoklás

> A string karaktereinek elérésekor az egyes karakterek mindig string típusúak.

---

```js
let s = "123"
s[0] = "10"

let eredmeny = s
```

1. "123" 👈
1. "1023"
1. hiba

## Indoklás

> A stringek nem módosítható értékek. Ha megpróbálunk egy karaktert felülírni, nem kapunk hibát, de a string változatlan marad.

---
```js
let a = 5

function f(a) {
  let a = 10
  return a
}

let eredmeny = f(7)
```

1. 10
1. hiba 👈
1. 5

## Indoklás

> A függvényben megkíséreljük újradeklarálni a paraméterlistán deklarált a változót.

---

```js
const a = 10

function f(a) {
  a = 15
}

let eredmeny = f(a)
```

1. undefined 👈
1. 15
1. hiba

## Indoklás

> f-nek nem adtuk meg a visszatérési értékét, így az
> alapértelmezetten undefined

---

```js
function add(a, b) {
    console.log(a + b)
}

let eredmeny = add(2, 3)
```

1. 5
1. undefined 👈
1. hiba


## Indoklás

> f-nek nem adtuk meg a visszatérési értékét, így az
> alapértelmezetten undefined

---

```js
function add(a, b) {
  return console.log(a + b)
}

let eredmeny = add(2, 3)
```

1. 5
1. undefined 👈

## Indoklás

> f-nek adtunk ugyan visszatérési értéket, de az egyenlő
> a console.log visszatérési értékével -- az pedig undefined

---

```js
function() {
  return "hello"
}

let eredmeny = f()
```

1. "hello" 
1. hiba 👈


## Indoklás

> nem adtunk nevet a függvénynek, így az f() hívás során hibát kapunk

---

```js
let eredmeny = 3
function g(f) {
  return f(1);
}

function f(g) {
  eredmeny = g(function(){ return 2 })
}

f(function(g) { return 3 })
```

1. 1
1. 2
1. 3 👈
1. végtelen rekurzió

## Indoklás

> A paraméterek nevei árnyékolják a függvényeket.
> Nem számít, hogy mit csinál a g függvény,
> csak az számít, mit csinál f. Az eredmeny változóba
> beíródik az f-nek átadott függvény visszatérési
> értéke, ami minden esetben 3 lesz, mivel így írtuk meg
> az f-nek átadott függvényt.

---

```js
let eredmeny = false || 3

```

1. true
1. 3 👈
1. hiba

## Indoklás

> A || operátor a kiértékelés során az első truthy értéket eredményezi

---
```js
let a = 5
function f() {
  a = 10
}

let eredmeny = a
f()
```

1. 5 👈
1. 10

## Indoklás

> Előbb adunk értéket, mint a változót
> módosító függvény futtatása

---

