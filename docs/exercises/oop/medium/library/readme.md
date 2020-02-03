# Library

Implementaljunk egy konyvtarat. A konyvtarbol lehessen konyveket kolcsonozni, visszahozni, es feltolteni a keszletet.
Lehessen lekerni abc sorrendben a konyveket

## book

Implementaljuk a konyveket szimbolizalo osztalyt

### constructor(author: string, title: string, pageNumber: number)

bejovo parameterek nevei legyenek a propertyk nevei is.

## library

Hozzunk letre egy konyvtarat.

### constructor(name: string, books: Book[])

Construktorban adjuk meg a konyvtar nevet, es a konyvek listajat. Legyen egy json literal tagunk, `borrowedBooks` amely szamomtartja majd hogy ki kolcsonozte ki a konyveket.

### borrowBook(bookTitle: string, readerName: string): Book

Konyvet tudunk kikolcsonozni a konyv neve alapjan. A kikolcsonzott konyvet adjuk hozza a `boorowedBooks`-hoz, ugy h a konyv cime legyen a kulcs, erteke pedig az h ki vette ki a konyvet. Ha egy konyv ki van mar kolcsonozve, dobjunk `Error`-t. Visszateresi ertekunk egy `Book` objektum

### bringBackBook(bookTitle: string, readerName: string)

Legyen lehetoseg visszahozni a konyvet. Ha visszahoztuk, akkor vegyuk ki a `borrowedBooks` json literalbol a konyvet. Ha egy konyv nincs kolcson adva, akkor ne lehessen visszahozni sem, dobjunk `Error`-t.

### getBookByName(name: String): Book

Adjon vissza egy konyv referenciat a listankbol

### addNewBook(book: Book)

Tudjunk hozzaadni uj konyvet a listankhoz. 

### removeBookByReference(book: Book)

tavolitsunk el elemet referencia szerint a listankbol

### removeBookByTitle(name: String)

tavolitsunk el konyvet a konyv cime szerint

### sortBooks()

rendezzuk ABC szerint novekvo sorrendbe a konyveket a listaban. `books` propertynk legyen ez az uj rendezett lista.

