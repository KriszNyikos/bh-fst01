1) írjunk egy math modult, amelynek két exportált függvénye van,
egy `sum` és egy `product` függvény

    a `sum` és a `product` is egy variadikus függvény

    a `sum` az átadott paraméterek összegét adja vissza

    a `product` a megadott paraméterek szorzatát

2) írjunk egy `logger` modult, amely exportál `er osztályt

    a `Logger` osztály az egyetlen exportált eleme a modulnak

    A `Logger` osztály rendelkezik egy `box` metódussal,
    amely egy értéket vár (pl. 5) és ezt az értéket 
    írja ki a képernyőre a következő formátumban:

```
    ***************************  <---- 27 karakter széles doboz
    * 5                       *        mert 27 * van a legfelső sorban
    ***************************
```

    a Logger kontruktorában megadhatjuk, hogy hány karakter
    széles legyen a doboz

3)

```js
const logger = new Logger(27)
logger.box(math.sum(1,2,3))

***************************
* 6                       *
***************************
```