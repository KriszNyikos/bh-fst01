# 2020. január 21., kedd


[előző alkalom](../20200118) [következő alkalom](../20200124)

# Summary

 - Megneztuk hogyan irjunk nodejs valtozot html templatebe
 - megneztuk h mukodik egy mar az npmben levo ilyen templating system
   - handlebars, npm package neve: express-handlebars
 - ismerkedes fetch-el, aszinkron hivas
 - ismerkedes a promise-sal
   - fontos: harom allapot, pending, resolved (ha success), rejected (ha failed)

# Ismétlés

...

# Templating

https://hackersandslackers.com/handlebars-templates-expressjs/

# Fetch API

https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch

- Mi az az API?
  - Nem csak egy webszerver endpointjai!
  - Bármilyen szoftver publikusan elérhető, "hívható felülete"
  - Bármilyen dolog működésének absztrakt leírása, specifikációja
- Mi az a Fetch API?
  - HTTP hívások indításának módját leíró specifikáció
  - használata: a globálisan elérhető `fetch` függvény segítségével
    - böngészőbe épített függvény, de nem a JS nyelv része!
    - külön specifikáció: https://fetch.spec.whatwg.org/
- then, catch
  - speciális műveletek, hamarosan kitárgyaljuk őket részletesen
  - ezekkel tudunk reagálni a HTTP válasz megérkezésére

## Példák

- hello world webszerver + fetch
- json response + fetch
- POST request
- DELETE request



# Promise

- Mi az a Promise?
  - egy jövőbeli érték reprezentációja
    - DB lekérés eredménye, HTTP válasz, lejárt timer, stb...
  - Promise API: ES6 spec része
  - https://www.ecma-international.org/ecma-262/6.0/#sec-promise-objects

A Fetch API Promiseokat használ

```js

const p = fetch(...) // p egy Promise, a HTTP válaszra vonatkozó "ígéret"
p.then(...) // then egy Promise művelet -- megadjuk a végrehajtandó kódot, ha az ígéret teljesült

p.catch() // catch szintén Promise művelet -- megadjuk a végrehajtandó kódot, ha az ígéret NEM teljesült
```



- Promise három állapota: pending, rejected, resolved
- Promise konstruktor: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
- resolve: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/resolve
- reject: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject
- then: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
- catch: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch


## Példák



# ngrok

- Mi az az ngrok?
  - Lokális szerver publikálását lehetővé tévő szoftver
  - Ingyenes regisztrációhoz kötött

## demó

- sorvezető: https://dashboard.ngrok.com/get-started
- regisztráljunk ngrok fiókot
- töltsük le az ngrok binaryt
- csomagoljuk ki egy könnyen elérhető helyre (ideálisan: a PATH-ra)
- indítsuk el a publikálni kívánt servicet (adjunk jogot a hálózati kommunikációra -- **figyelem:potenciálisan veszélyes művelet, ha így hagyjuk a hálózati beállításokat**)



- indítsuk el az ngrokot (adjunk jogot a hálózati kommunikációra -- **figyelem:potenciálisan veszélyes művelet, ha így hagyjuk a hálózati beállításokat**)
- az ngrok kiírja a konzolra, hogy mely publikus URL-en lehet elérni a lokális webszerverünket!

**az óra után ne felejtsük el szükség esetén újrakonfigurálni a hálózati beállításokat, hogy nyilvános helyen ne lehessen hozzáférni a számítógéphez!**




# 1. gyakorlat: ping

Írjunk egy `ping.js` szerver programot.

A `ping.js` egyetlen endpointja `GET /ping`, amelyet, ha meghívunk, visszaküld egy egyszerű
szöveges választ, aminek a tartalma a `ping` szöveg.

Futassuk a szervert a `3000` porton.

Hívjuk meg az endpointot böngészőből (`http://localhost:3000/ping`), a `ping` szöveget kell
látnunk a böngészőben.

# 2. gyakorlat: ping-pong

## 2.1 pong.js

Írjunk egy `pong.js` szerver programot.

A `pong.js` egyetlen endpointja `GET /pong`, amelyet, ha meghívunk, visszaküld egy egyszerű
szöveges választ, aminek a tartalma a `pong` szöveg.

Futassuk a szervert a `3030` porton.

Hívjuk meg az endpointot böngészőből (`http://localhost:3030/pong`), a `pong` szöveget kell
látnunk a böngészőben.

## 2.2 fetch

Módosítsuk a `ping.js` programot, hogy a `GET /ping` endpoint meghívásakor továbbhívjon a
`pong.js` `GET /pong` endpointjára.

A `ping.js` a hívás eredményét dolgozza fel: állítsa össze a `'ping-pong'` sztringet a `pong.js` válaszüzenetének felhasználásával és küdlje vissza a HTTP válaszban.

# 3. gyakorlat: whoami

Írjunk egy `whoami.js` servicet.

Egy endpointja `GET /whoami`, amely a nevünket adja vissza,
pl. Szűcs László.

Konzolra írjuk ki a beérkező kérés összes fejléc sort!

Egy másik endpointja a `GET /whois`, amely query string paraméterként vár egy ngrok ID-t

A `GET /whois` endpoint továbbhív az ngrok ID-val bíró hoszt
`GET /whoami` endpointjára és annak válaszüzenetének felhasználásával kiírja, hogy az adott ID kihez tartozik, pl. `/whois?ngrokid=fed283de` ---> `Szűcs László (fed283de)`

# RESTful APIK

Roy Fielding eredeti dolgozata: https://www.ics.uci.edu/~fielding/pubs/dissertation/rest_arch_style.htm

- Mi az a REST?
  - architekturális stílus
  - 
- Mi az a RESTful? Minden JSON API RESTful? 
- Miért jó mindez? Milyen API-k voltak ezelőtt? (XML, RPC, egyebek...)

# 4. gyakorlat: RESTful CRUD

- mi az a CRUD?
- memóriába mentett adatok, nem kell db
- username és password reg
- duplikáció vizsgálat
- jelszó módosítás
- username módosítás
- 

# Házi feladat

## RESTful CRUD, DB-vel

