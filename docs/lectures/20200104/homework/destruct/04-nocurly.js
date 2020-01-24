// Derítsük fel a hátterét és javítsuk ki
// az alábbi SyntaxErrort!
// Tipp: a válasz az Exploring ES6 könyv Destructuring
// fejezetében van!
let a, b

 {a, b}  = { foo: 1, bar: 2 }
 console.log(a,b);

/* 2 fajta hiba van:
    -A console.log a "let"-vel deklarált változókat mutatja ki, vagyis "undefined"
    -Az objektumban a kulcsszavakat kell felhasználni tárolóként, és nem változókat
*/

 //Megoldás:
 const {foo, bar}  = { foo: 1, bar: 2 }
 console.log(foo,bar);
 
 