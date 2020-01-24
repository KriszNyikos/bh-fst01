// Alakítsuk arrow functionökké a függvényeket!
// Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!

let double = function double(x) {
    return 2 * x
}
// Megoldás:
    let double = x => x * 2;

function invert(x) {
    return -x
}
// Megoldás:
    let invert = x => -x;

let hello = function() {
    return 'hello'
}
// Megoldás:
    let hello = () => 'hello';


// Alakítsuk function expressionökké az arrow functionöket!

let helloPrefixer = s => 'hello ' + s
// Megoldás:
    let helloPrefixer = function(s){
        s = 'hello ' + s;
        return s;
    }


let doNothing = () => {}
// Megoldás:
    function doNothing(){}

// Alakítsuk function declaractionné

let advice = raining => raining? 'Take your umbrella' : 'Take you sunglasses'
// Megoldás:
    function advice(raining){
        if(raining === true){
            return 'Take your umbrella';
        }else{
            return 'Take your sunglasses';
        }
    }



let isEmpty = arr => !arr.length
// Megoldás:
    function isEmpty(arr){
        if(arr.length <= 0){
            return false;
        }
    }



let tricky = want => want = false
// Megoldás:
    function tricky(want){
        want = false;
        return want;
    }