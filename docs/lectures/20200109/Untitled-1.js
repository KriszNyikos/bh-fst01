function forEach(arr, fun) {
    for (let i = 0; i < arr.length; i++) {
        return fun(arr[i])
    }
}

function every(arr, cond) {

    for (let i = 0; i < arr.length; i++) {
        if (!cond(arr[i])) return false
    }

    return true
}

function smallerThan4(n) {

    return n < 4
}



function filter(arr, cond) {
    const result = []
    for ( let i = 0 ; i < arr.length; i++) {
        if (cond(arr[i])) {
            result.push(arr[i])
        }
    }

    return result
}

function map(arr, fun) {
    const result = []
    for (let i = 0; i < arr.length; i++) {
        result.push(fun(arr[i]))
    }

    return result
}


function reduce(arr, fun, init) {
    let i = 0
    if (!init) ({ i, init } = {
        i: 1,
        init: arr[0]
    })

    let valueSoFar = init

    for ( ; i < arr.length; i++ ) {
        valueSoFar = fun(valueSoFar, arr[i])
    }

    return valueSoFar
}

function setIAndInit(arr) {
    return 
}

function reduceWithoutInit(arr, fun) {
    //.... hazi feladat
}

function find(arr, cond) {
    for (let i = 0; i < arr.length; i++) {
        if(cond(arr[i])) return arr[i]
    }
}