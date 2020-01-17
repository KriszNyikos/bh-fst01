// # Funkcionális JavaScript

// Írjunk egy `dividables(numbers, divisors)` függvényt, amely a numbers paraméterben kapott egész számokból álló tömbből kiválogatja azokat, amelyek a divisors tömbben kapott összes egész számmal osztható.

// A visszatérési érték a kiválogatott számokat tartalmazó tömb.

// Példa:
// ```js

// console.log(dividables([1, 2, 3, 4, 5, 6, 7, 8], [2]))
// [2, 4, 6, 8]

// console.log(dividables([1, 2, 3, 4, 5, 6, 7, 8], [2, 3]))
// [6]
// ```
console.log('1. feladat -----------------------------------------------------------')

let num = [1, 2, 3, 4, 5, 6, 7, 8];
let div = [2];
let div2 = [2, 3];

let dividables = (numbers, divisors) => {
    return numbers.filter(num => divisors.every(div => num % div === 0))
}

console.log(dividables(num, div));
console.log(dividables(num, div2));


// 1 pont

console.log('2. feladat -----------------------------------------------------------')

// Írjunk egy `legalStrings(strings, charStr)` függvényt, amely a strings paraméterben kapott string tömbből kiválogatja azokat a stringeket, amelyekben nincs más karakter csak olyan, amely a 
// charStr paraméterben található stringben van.

// A visszatérési érték a kiválogatott stringek tömbje.

// Tipp: használjuk a String.prototype.Split függvényt a stringek
// tömbbé alakítására

// ```js
// console.log(legalStrings(['a', 'aa', 'ab', 'aaa'], 'a'))
// // ['a', 'aa', 'aaa']

// console.log(legalStrings(['a', 'aa', 'ab', 'aaa'], 'ab'))
// // ['a', 'aa', 'ab', 'aaa']

// console.log(legalStrings(['b', 'bb', 'ab', 'ba'], 'ab'))
// // ['b', 'bb', 'ab', 'ba']
// ```

let legalStrings = (array, requested_string) => {
    let string = requested_string.split('')
    return array.filter(chars => chars.split('').every(char => string.find(element => element === char)))
}
console.log(legalStrings(['a', 'aa', 'ab', 'aaa'], 'a'))
console.log(legalStrings(['a', 'aa', 'ab', 'aaa'], 'ab'))
console.log(legalStrings(['b', 'bb', 'ab', 'ba'], 'ab'))

// 1 pont

console.log('3. feladat -----------------------------------------------------------')

// Legyen nums = [1, 2, 3, 4, 5, -6, -7, -8, -9, 10]

// Írjunk egy getMax(nums) függvényt, amely a nums paraméterben érkező egész számokat tartalmazó tömbből visszaadja a legnagyobb elemet. 

// Tipp: használjunk reducet!

// ```js
// console.log(getMax([4])) // 4
// console.log(getMax([1, 2, 3, 4, 5])) // 5
// console.log(getMax([])) // undefined

// ```




let getMax = (array) => {

    let func = (array) => array.reduce((max, curr) => {
        max = (max === undefined || curr > max) ? curr : max
        return max
    });

    let output = (array.length !== 0)? func(array) : undefined;
    return output
}

let nums = [1, 2, 3, 4, 5, -6, -7, -8, -9, 10]

console.log(getMax(nums))
console.log(getMax([4]))
console.log(getMax([1, 2, 3, 4, 5]))
console.log(getMax([]))
// 2 pont

console.log('4. feladat -----------------------------------------------------------')

// Írjunk egy select(arr, cond) egy függvény, ahol arr egy tömb, cond egy logikai értéket visszaadó függvény

// A select az arr elemeit két külön tömbbe válogatja
// aszerint, hogy igaz volt-e rájuk a cond feltétel vagy sem

// A select visszatérési értéke egy kételemű tömb.

let nums_select = [1, 2, 3, 4, 5, -6, -7, -8, -9, 10]

let condFunc = num => num > 0;

let select = (arr, cond) => {
return [arr.filter(element => cond(element)), arr.filter(element => !cond(element))]
}

console.log(select(nums_select, condFunc))

console.log('5. feladat -----------------------------------------------------------')

// Írjunk egy `isPermutation(subject, base)` függvényt, amely megmondja a subject stringről, hogy a base string permutációja-e,
// azaz, hogy a subject string előállítható-e kizárólag a base string karaktereiből úgy, hogy csak a base karaktereit használjuk.

// Példa:

// ```js
// console.log('aa', 'a') // false, base karakterei "elfogytak"
// console.log('a', 'aa') // false, subject nem használta fel az összes karaktert
// console.log('aa', 'aa') // true, felhasználtuk az összes karaktert

// console.log('ab', 'ab') // true
// console.log('ab', 'ba') // true
// console.log('ba', 'ab') // true
// console.log('ba', 'ba') // true

// ```

// Alternative solution

// let isPermutation = (subject, base) =>{
//     if(subject.length === base.length){
//         return (subject.split('').sort().join('') === base.split('').sort().join(''))? true : false
//     }
//     return false
// }

// Solution with higher order functions

let isPermutation = (subject, base) =>{
    let sortedSubArray = subject.split('').filter(string => string).sort().join('')
    let sortedBaseArray = base.split('').filter(string => string).sort().join('')
    if (subject.length === base.length) {
        return (sortedSubArray === sortedBaseArray)? true : false
    }
    return false
    
}


console.log(isPermutation('a', 'aa'))
console.log(isPermutation('aa', 'a'))
console.log(isPermutation('ab', 'ab'))
console.log(isPermutation('ab', 'ba'))
console.log(isPermutation('ba', 'ab'))
console.log(isPermutation('ba', 'ba'))

// 2 pont

// ---
