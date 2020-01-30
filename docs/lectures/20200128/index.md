# 2020. január 28., kedd


[előző alkalom](../20200125) [következő alkalom](../2020130)


# Summary
 - ismetles DOM
 - document.querySelecotr vissza adja az elso talalatot
 - document.querySelectorAll visszaadja az ossze talalalot
 - document.getElementById id alapjan adja vissza
 - document.getElementsByClassName az ossze egyezo class nevet visszaadja
 - fentiek eredmenye vagy egy `Node` vagy egy `NodeList`
 - `HTMLElement`-bol oroklodnek
 - item.addEventListener(typeStringkent, handlerFunction);
 - minden handler functionbe a megfeleloen castolt Event objektum injektalodik, pl keyup, keydown-nal KeyboardEvent, eger clicknel pedig MouseEvent
 - fontos attr-ek: event.target, event.isTrusted, a koordinatak, key, which, buttons
 - mi a bubbles, es mi a capture (bubbles gyermektol felfele aramlik a captures pedig a szulotol lefele a target-ig). 
 - event.stopProgation(), event.preventDefault()
 - innerHTML-el stringkent
 - document.createElement('LI'), appenChild

## DOM

- mi az a DOM (Document Object Model) ?
- elemek lekerdezese
- elemek beszurasa
- elemek eltávolítása  (nem neztunk ra peldat)

## Események

## Gyakorlatok

### alert hello

Egy gombra kattintva jelenjen meg egy "hello world" alert.

---

### container hello

A DOMban adjunk meg egy `button` HTML elementet es egy `div#container` html elemet, ahol a `#container` a html elem `id`-jat jelenti, tehat `id='container'`, amely `click` esemeny kezelojehez megadunk egy fg-vt, amely a `container`-be kiirja, hogy `Hello World`.

---

### click counter

Legyen egy gomb. A gomb címkéje kezdetben nulla (`<button>0</button>`). Minden kattintáskor növeljük
eggyel a gombon látható számot.

---

### increase-decrease

Egy HTML fileban legyen ket `button` elemunk, es egy `div#container`. Az egyik gomb noveljen egy szamlalot egyel, a masik csokkentse, es minden gombnyomas eredmenye legyen lathato a `container`-ben

---

### custom alert



---

### calculator 

Keszitsunk szamologepet, alapveto aritmetikai muveletekkel (osszeadas, kivonas, osztas, szorzas).
Legyen egy `div#result` amely az eredmenyt jeleniti meg, legyen 10 `button` elemunk a gomboknak, es 4 `button` a muveleteknek, tovabbi plusz egy `button` az egyenloseg jelnek.

   A `result` mukodjon a kovetkezo keppen
    a) egyszeru eset:
        minden megnyomott szam megjelenik, muvelet megnyomasa utan, a kovetkezo szamot megnyomva az eredmeny latszik.
    b) Opcionalis ha nagyon unotkozol :)
        Gombokat nyomogatva, minden megjelenik a `div#result`-ban es csak az egyenloseg gomb megnyomasakor ertekelodik ki a kifejezes.

---

todo lista
   Keszitsunk egy programot, amely a teendoinket tartja szamon
    - lehessen hozzaadni uj TODO-t
    - lehessen torolni
    - ha kesz a teendo, akkor legyen lehetoseg azt `done` allpotba tenni

---

Modal ablak

---

  6) tic-tac-toe (kliens oldalon)

  Írjunk egy tic-tac-toe játékot.

  6.1) Kezeljük le a játék végét. Ha a játéknak
  vége, jelenítsünk meg egy modal ablakot.

  A modal ablak tartalma
  
  5.1) Custom event használatával "billentsük a 
