# 2020. január 25., szombat


[előző alkalom](../20200123) [következő alkalom](../20200128)

# 1. gyakorlat: countsrv.js

Írjunk egy `countsrv.js` szervert.

A szerver memóriában tárol egy `counter` értéket, amely egy szám.

`GET /count`

Eggyel növeli a `counter` értéket és visszaküldi a `counter` új értékét.

# 2. gyakorlat: valuesrv.js

Írjunk egy `value.js` szervert.

A szerver memóriában tárol egy `value` értéket, amely egy szám.

`GET /increase`

Eggyel megnöveli a számot és visszaküldi az új értéket

`GET /decrease`

Eggyel csökkenti a számot és visszaküldi az új értéket

# 3. gyakorlat: studentsrv.js

Legyen egy hallgatót reprezentáló osztály. A hallgatónak neve és azonosítója van.
Az azonosító egy szám. 

```
+--------------+
| Student      |
+--------------+
| id: number   |
| name: string |
+--------------+

```

`GET /students`

A hallgatókat tartalmazó tömböt küld vissza.

`POST /student`

Request bodyban fogad egy új hallgató objektumot. A létrehozandó objektumban csak
a név van megadva, az azonosítót a szerver generálja.

A generált ID-val feltöltött Student objektumot küldi vissza.

`DELETE /student/:studentId`

Kitörli a path paraméterben megadott azonosítóval rendelkező hallgatót. 

Üres 200 OK üzenetet küld vissza.

# 4. gyakorlat: lecturesrv.js

A lecturesrv előadások adatait kiszolgáló szerver.

Legyen egy Lecture osztály

```
+---------------------+
| Lecture             |
+---------------------+
| id: int             |
| name: string        |
| students: []Student |
+---------------------+
```

A lecturesrv egy lectures tömbben tárolja a Lecture objektumokat. 

`GET /lectures`

Visszaküldi az előadások listáját

`POST /lecture`

A kérés törzsében fogad egy félkész Lecture objektumot. Az ID-t a szerver generálja. A students lehet üres vagy sem.

Az ID-val kiegészített, elmentett Lecture objektumot küldi vissza.

`PUT /lecture/:id`

Egy kész Lecture objektumot vár a kérés törzsében. ID nem szükséges a törzsben. Ha létezik a path paraméterben megadott ID-val bíró Lecture, felülírja az adatait a törzsben érkező adatokkal és 200 OK választ küld vissza. Ha nem létezett, akkor 404 NOT FOUND választ külld vissza.


`DELETE /lecture/:id`

Kitöröl egy Lecturet.

Csak akkor lehet törölni, ha a Lecture students tömbje üres.

Sikeres törlés esetén 200 OK válasszal tér vissza, különben 409 CONFLICT válasszal.

# 5. gyakorlat: guessgame

A guessgame szerver az elindításakor generáljon egy számot 1 és 10 között.

`GET /guess`

Tipp fogadására szolgáló endpoint. 

Egy `num` query paraméterben várja a tippünket. Egyszerű szöveges válaszüzenetben tájékoztat az eredményről.

> Tegyük fel, hogy a `guessgame.js` a `3000` porton indult el és az `5` számot generálta ki.

>     $ curl localhost:3000/guess?num=3
>     Nem talált!
>     $ curl localhost:3000/guess?num=5
>     Talált!

`POST /new`

Új játékot indít, vagyis újragenerálja a számot.

> Tegyül fel, hogy először a 3 számot generálja ki, majd küldünk egy üzenetet a POST /new endpointra és ekkor az 5 generálódik ki.
>
> ```bash
> $ curl localhost:3000/guess?num=3
> Nem talált!
> $ curl localhost:3000/guess?num=5
> Talált!
> $ curl localhost:3000/new -X POST
> $ curl localhost:3000/guess?num=5
> Nem talált!
> $ curl localhost:3000/guess?num=3
> Nem talált!
> $ curl localhost:3000/guess?num=7
> Talált!
> ```

## CLI paraméterezhetőség

Legyen CLI paraméter, amit, ha megadunk, akkor nem lesz szám generálva, hanem azt a számot állítjuk be.

> ```bash
> $ node guessgame.js 5
>
> $ curl localhost:3000/guess?num=5
> Talált!
> ```

## ngrok

Publikáljuk a szervert ngrokkal és játsszunk egy menetet egymás szerverével!

Ha új számot akarunk megadni, elég a szervert újraindítani, az ngrok processz maradjon ép, különben az ngrok URL érvénytelenítve lesz!

# 6. gyakorlat: árfolyam

## Írjunk egy rate szervert.

A szerver indításakor egy számot vár, egy képzeletbeli valuta, a Piréz Della (PDA) árfolyamát.

    $ node ratesrv 110
    ratesrv started on port 3000

`GET /rate`

A PDA árfolyamát adja vissza.

>     $ curl localhost:3000/rate
>     110

## Írjunk egy product szervert

A productsrv indításkor egy URLt vár, egy rate szerver URLjét.

    $ node productsrv http://localhost:3000
    productsrv started on port 3010

A szerver forráskódjába égetve tartalmaz két terméket. A termékeknek
nevük és egy alapáruk van, HUFban.

`GET /products`

A termékadatokat küldi vissza. A `curr=pda` query paraméter megadása
esetén a termékek ára Piréz Dellában lesznek.

    $ curl localhost:3030/products
    [{"name":"spice","price":200},{"name":"koolaid","price":100}]
    
    $ curl localhost:3030/products?curr=pda
    [{"name":"spice","price":22000},{"name":"koolaid","price":11000}]


```
+------------------
| Product
+------------------
| id: number
| name: string
| price: number
+-------------------
```

POST /product

Bejegyez egy új terméket.

Egy Product adatait várja az üzenet törzsében. Az ID-t a szerver generálja.

Ha sikeresen bejegyezte az új terméket, 201 CREATED választ küld. A válasz
törzsében a kigenerált ID.

PUT /product/:id

Az :id paraméter által azonosított Product adatait szerkeszti




# 7. gyakorlat: products.html

## szerver oldali rendering

Egészítsük ki az előző feladat product szerverét.

`GET /products.html`

Állítsunk elő egy HTML oldalt amely a termékadatokat egy listában tartalmazza. Az API-hoz hasonlóan,
a `curr=pda` query paraméterrel tudjuk szabályozni
a valutát.

Legyen a termékoldalon két link: HUF és PDA

Amelyik linkre kattintok, a megfelelő valutában
jelenjenek meg a termékadatok.

## kliens oldali rendering Fetchcsel

Írjunk egy `fetch-products.html` oldalt. Figyelem: ez egy egyszerű HTML oldal, nem egy endpoint!

A HTML oldalban, kliensoldalon implementáljunk egy Fetch alapú adatlekérést.

A termékadatokat Fetchcsel kérjük le a product szerver product endpointjáról.

A visszaérkező termékadatokat dinamikusan írjuk be az oldal tartalmába.

Tipp: 
```js
const data = getData() // 1) írjuk meg az adatlekérő függvényt
const listHTML = convertToHTML(data) // 2) Írjuk meg a JSON válaszból HTMLt előállító függvényt

document.body.innerHTML = listHTML // 3. írjuk bele a HTMLt a bodyba
```


---



# Házi feladat: Books

Írjunk egy könyveket nyilvánvtartó webalkalmazást.

Legyen egy booksrv szerverünk.

Memóriában tároljunk könyv objektumokat.

A könyveknek IDja, címe és szerzője van.

A szerver Handlebar templateket fog használni a HTML oldalak
tartalmának megjelenítésére.

A hibakezeléstől egyelőre eltekintünk.

## `GET /books.html `

Könyveket listázza egy táblázatban. A táblázat sorai a memóriában
tárolt könyvek.

A táblázat sorai könyveket reprezentálnak. Az oszlopok:
- ID
- Title
- Author
- Operations

Az operations oszlopban két link van:
- Edit book -> edit.html
- Delete book -> delete.html


Az edit.html és a delete.html query paraméterként kapják meg az adott könyv ID-ját.

    <tr>
      <td>1</td>
      <td>Lord of the Kings</td>
      <td>J. R. Jr. Talking</td>
      <td>
        <a href="edit.html?id=1">Edit</a>
        <a href="delete.html?id=1">Delete</a>
      </td>
    </tr>


A táblázat alatt egy New book link egy new-book.html oldalra
mutat.

## `GET /edit.html`

Egy könyv adatait tudjuk szerkeszteni egy űrlapon. A könyvet
egy id query string paraméter alapján töltjük be a szerveren, mikor
összeállítjuk a HTMLt.

    <form action="books" method="POST">

Az űrlap a `POST /book/:id/edit` endpointra küldi az adatot (vigyázat, nincs .html
a végén).

## `POST /book/:id/edit`

Az üzenet törzsében fogadja az :id path paraméter által meghatározott
könyv adatait, amikkel egyszerűen felülírja a memóriában
tárolt értékeket.

A válasz egy 301 REDIRECT üzenet legyen, amely a /books.html
oldalra irányít.

Segítség: https://expressjs.com/en/4x/api.html#res.redirect


## `GET /delete.html`

Egy kérdést jelenít meg, hogy biztosan törölni akarjuk-e a könyvet.

Egy egyetlen submit gombból álló űrlap van a megjelenített oldalon.

Az űrlap a `POST /book/:id/delete` endpointra küldi a kérést.

## `POST /book/:id/delete`

Kitörli az :id által azonosított könyvet a memóriában tárolt
adatszerkezetből.


A válasz egy 301 REDIRECT üzenet legyen, amely a /books.html
oldalra irányít.


## `GET /new-book.html`

A szerkesztés oldalhoz hasonló űrlapot jelenít meg, de a adatok
nincsenek kitöltve, mert nincs mögöttes adat.

Az űrlap az adatokat a `POST /books` endpointra küldi.

## `POST /books`

Elment egy új könyvet a törzsben érkező adatokkal. Az ID-t
az endpoint handler generálja.




