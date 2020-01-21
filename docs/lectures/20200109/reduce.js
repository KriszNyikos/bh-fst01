function reduce(array, fun, init) {
    let result = init
    for (let i = 0; i < array.length; i++) {
        result = fun(result, array[i])
    }

    return result
}

console.log(reduce([1,2,3,4], (s, x) => x + s, 0))