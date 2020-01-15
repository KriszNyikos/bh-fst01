// Írjuk át a megjelölt function expressionöket
// arrow functionre! Ahol lehet, hagyjunk el amit
// csak lehet a szintaxisból!

const doSomething = function(f, x) {
    return f(x)
}
//                              (1)
const triple = doSomething(function(x) {
    return 3 * x
}, 5)
console.log(triple) // == 15

// Megoldás
    let doSomething2 = (f, x) => f(x)
    let triple2 = doSomething2( (x) => 3 * x , 5) 

    console.log(triple)
//------------------------------------------------------------------------------------------------------------------------------------


//                                    (4)
const createIncrementerFunction = function(inc) {
//             (3)
    return function(n) {
//                (2)
        return function() { return n + inc }
    }
}

const result = createIncrementerFunction(1)(2)()
console.log(result)  // 3

// // Megoldás
const createIncrementerFunction2 = (inc) => (n) => () => n + inc
const result2 = createIncrementerFunction2(1)(2)()
console.log(result2)
// //------------------------------------------------------------------------------------------------------------------------------------



