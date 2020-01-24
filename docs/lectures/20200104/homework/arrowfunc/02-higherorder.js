// Írjuk át a megjelölt function expressionöket
// arrow functionre! Ahol lehet, hagyjunk el amit
// csak lehet a szintaxisból!

const doSomething = function(f, x) {
    return f(x)
}
//Megoldás:
    const doSomething = (f,x) => {return f(x);}



//                              (1)
 const triple = doSomething(function(x) {
     return 3 * x
}, 5);
//Megoldás:
     const triple = (x) => {return 3 * x; }
 console.log(triple(5)) // == 15

                                   (4)
const createIncrementerFunction = function(inc) {
//             (3)
    return function(n) {
//                (2)
        return function() { return n + inc }
    }
}
//Megoldás:
let createIncrementerFunction = inc => n => () => n + inc;

const result = createIncrementerFunction(1)(2)()
console.log(result)  // 3


