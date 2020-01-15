// Derítsük fel a hátterét és javítsuk ki
// az alábbi SyntaxErrort!
// Tipp: a válasz az Exploring ES6 könyv Destructuring
// fejezetében van!
let a, b   // We do not need declare the a and b variable, before destructuring.

const { a, b } = { foo: 1, bar: 2 } // The problem is, that you cannot refer to properties from the right side object with this syntax.

//-----------------------------------------------------------------------------------------------------------------
// Megoldás

const { foo: a, bar: b } = { foo: 1, bar: 2 } // The destructuring algorithm needs exact keys from the right side object, because the operation looking
                                              // for these keys on the left side. Without these the built in loop cannot find the appropriate variable.
                                              // Moreover you can change the name of these properties, with ":" sign.
                                              // After these modifications, you can write the required a and b variables.

console.log(a, b)

//-----------------------------------------------------------------------------------------------------------------