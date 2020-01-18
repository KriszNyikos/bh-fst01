# 2020. január 18., szombat


[előző alkalom](../20200114) [következő alkalom](../20200121)

# Szerverek, webszerver
- Szerver: hálózati gép, amely valamilyen célfeladatot lát el, hálózati kérésekre válaszol, "kiszolgálja", "szervírozza" őket
- Webszerver: kimondottan a Világháló (World Wide Web) működtetésében közreműködő szerver, amely HTTP kéréseket fogad
  - Weboldalak, webes alkalmazások kiszolgálása
- Port: számítógépen található adatátviteli csatlakozási pont
  - fizikai port: ezekbe dugjuk bele a kábeleinket (jobb esetben)
  - virtuális port: az operációs rendszer által kezelt "képzeletbeli" portok, amikhez programok tudnak csatlakozni (pl. annak reményében, hogy ellopják a hitelkártya adatainkat)
  - Rengeteg portot nemzetközileg elfogadott célra használunk: https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers#Well-known_ports
  - Webszerverek közmegegyezéses portja:
    - HTTP: 80
    HTTPS: 443
- Gyakran használt webszerverek: apache, nginx, tomcat, jetty, **express**

**élőzés: Alapok**

Chrome DevTools network tab segítségével

- request, response
- method, host, path info
- header
- body
- status code
- url encoding, form encoding
- URL-ek
  - **scheme**, userinfo, **host**, **port**, **path**, **query**, **fragment**
  - Hivatalos URL def: https://tools.ietf.org/html/rfc3986 (csak, hogy ilyet is lássunk!)

https://www.ietf.org/rfc/rfc2396.txt



**Élőzés: HTTP és HTTPS portok**
> https://duckduckgo.com
> https://duckduckgo.com:80
> 
> http://duckduckgo.com:443
> http://duckduckgo.com
> http://duckduckgo.com:80


# Express.js

- Miért Express.js?
  - könnyen, gyorsan konfigurálható
  - széles körben elterjedt
  - kiválóan dokumentált

Élőzés: helló világ

```
$ npm install express --save
```

```js
// app.js
const express = require('express')
const app = express()
const port = 3000 // nem a 80 port, mert azt éles webszerverekre használjuk

app.get('/hello', (req, res) => res.send('Hello World!')) // (1)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
```

```
$ node app.js
```

## Routing

- routing: elfogadott HTTP path info minták és ("útvonalak", "routes") HTTP methodok és az útvonalak megnyitását/meghívását lekezelő függvények összekapcsolása
  - **figyelem: HTTP method != metódus JSben!**
  - /hello esetén az (1) anonim függvény fog lefutni
  - a /hello az egyetlen meghívható útvonal
- router: a leképezést végző komponense
  - adott egy default router
  - testreszabható egyedi routerek (csak megemlítés szintjén)
  - egymásba ágyazott, összetett routerek (csak említés szintjén)
- endpoint

# 1. gyakorlat: counter

webszerver kiírja, hogy hányszor hívtuk meg az endpointot

---

- URL paraméterek

# 2. gyakorlat: paraméterezett helló {$user}

/hello/:username endpoint visszaad egy testreszabott köszöntést

## Controller

- Bejövő HTTP kérést kiszolgáló komponense
- Bonyolultabb route handling esetén: a handler függvény helyett egy controller objektum vagy egy controller metódusa
- Globális változók helyett egységbezárás (encapsulation)
- Hasonló endpointok hasonló (netán ugyanazon) adatokon dolgoznak

# 3. gyakorlat: userek és departmentek

- beégetett listák a memóriában
- ezek manipulációja (lekérés, hozzááadás)


## Middleware

- a beérkező kéréseket elő- és utófeldolgozó komponensek
- pl. authentikáció, CSRF (csak néhány szóban megemlítve, hogy értsék mire jó, nem kell elmélyedni)
- több is tartozhat egy routehoz
- request -> middleware(req) -> controller(req, resp) -> middleware(resp) -> response



## Statikus webhely kiszolgálása

## Dinamikusan generált HTML 

**templating**: valamiféle sablonok (általában HTML) használata és dinamikus feltöltése adattal

**template engine**

- összetett sablon készítési problémákat megoldó könyvtárak
- önállóan is használhatóak
- gyakran vannak express js-be építhető pluginok
  - plugin fogalom tisztázása!

**Egyszerű templating**

string interpolation hasnálatával

## Frontend ízelítő: űrlap elküldése



```html
<!-- legegyszerűbb eset: üres űrlap  -->
<form action="localhost:3000/hello" method="GET">
  <input type="submit"></input>>
</form>
```

```html
<!-- figyeljük meg az URLt az űrlap elküldése után -->
<form action="localhost:3000/hello" method="GET">
  <input type="firstname" >
  <input type="lastname" >
  <input type="submit"></input>>
</form>
```

- query string, URL form encoding

> localhost:3000/hello?**foo=1&bar=2=baz=3**


## HTTP kérés feldolgozása

```js
app.get('/user/:id', function (req, res) {
  res.send('user ' + req.params.id)
})
```

Ismerkedés az Express doksival: https://expressjs.com/en/4x/api.html#req

query string: https://expressjs.com/en/4x/api.html#req.query

meghívott endpoint: https://expressjs.com/en/4x/api.html#req.route

HTTP method: https://expressjs.com/en/4x/api.html#req.method

**HTTP üzenet törzsének feldolgozása**

https://expressjs.com/en/4x/api.html#req.body

> figyelem: req.body alapból undefined, csak middlewarek használatával tudunk hozzáférni a HTTP üzenet törzséhez

```js
var express = require('express')

var app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.post('/profile', function (req, res, next) {
  console.log(req.body)
  res.json(req.body)
})
```

# 4. gyakorlat: calculator api

árlapról kiválasztjuk dropdownban, hogy mi legyen a művelet, megadunk két számot inputban, a bakend visszaküldi az eredményt

# 5. gyakorlat: perzisztens counter

probléma: counter mindig újraindul, ha a node processz leáll.

counter adatokat mentsük le dbbe

# 6. gyakorlat: user adatok beszúrása dbbe

username, password, password egyelőre cleartext

# 7. gyakorlat: login form

sütizés most nem kell, csak egy login oldal, ami lekezeli a user/pass egyezést

# 8. egy-egy sor adatainak lekérése ID alapján

<!-- 

- rowid automatikus inkrement ID sqliteban
- nem látszik a sémában, de ki tudjuk választani
- frontenden kiprinteljük
- 


>

# 9. gyakorlat: search input és keresés LIKE-kal SQL-ben

# 10. gyakorlat: paging query string paraméterek és LIMIT, OFFSET segtségével
