# book

implementaljunk egy konyvet reprezentalo egyseget

## constructor(title: string, author: string, maxPages: number)

bemeneti parameterek a kovetkezoek legyenek:
 - `title`: a konyv cime legyen
 - `author`: a konyv szerzoje legyen
 - `maxPages`: a konyv oldalainak szama

legyen egy flag, ami jelzi hogy hogy allunk az olvasasaval `readPages` es alapbol legyen 0.

## read(pages: number)

read metodussal olvashatunk a konyvben, negativ szamot nem fogadunk el, ha negativ a `pages` erteke akkor dobjunk `Error`-t.
`readPages`-t noveljuk `pages` szamaval, es a `readPages` erteke nem lehet tobb a `maxPages`-tol.

## getReadStatus(): string

adjuk vissza az olvasas allapotat szazalekban kiszamitva. pl: `'100%'`, `35%` ...
