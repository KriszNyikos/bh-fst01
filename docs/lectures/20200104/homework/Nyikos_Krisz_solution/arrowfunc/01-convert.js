// Alakítsuk arrow functionökké a függvényeket!
// Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!

let double = function double(x) {
    return 2 * x
}

// Megoldás
    let double2 = (x) => x * 2;
    console.log(double2(2))
//------------------------------------------------------------------------------------------------------------------------------------

function invert(x) {
    return -x
}

// Megoldás
   let invert2 = (x) => -x
   console.log(invert2(2))
//------------------------------------------------------------------------------------------------------------------------------------

let hello = function() {
    return 'hello'
}

// Megoldás
    let hello2 = () => 'hello'
    console.log(hello2())
//------------------------------------------------------------------------------------------------------------------------------------


// Alakítsuk function expressionökké az arrow functionöket!

let helloPrefixer = s => 'hello ' + s

// Megoldás
let  helloPrefixer2 = function(s){
    return 'hello' + s
}
console.log(helloPrefixer2('b'))
//------------------------------------------------------------------------------------------------------------------------------------

let doNothing = () => {}

// Megoldás
let doNothing2 = function(){}
//------------------------------------------------------------------------------------------------------------------------------------

// Alakítsuk function declaractionné

let advice = raining => raining? 'Take your umbrella' : 'Take you sunglasses'

// Megoldás
    function advice2(raining){
        if (raining) {
           return 'Take your umbrella'
        } else {
           return 'Take you sunglasses'
        }
    }
    console.log(advice2(false))
//------------------------------------------------------------------------------------------------------------------------------------

let isEmpty = arr => !arr.length


// Megoldás
let arr = [2, 4]
function isEmpty2(arr){
    return !arr.length
}

console.log(isEmpty2(arr))
//------------------------------------------------------------------------------------------------------------------------------------

let tricky = want => want = false
// Megoldás
  function tricky2(want){
      return want = false;
  }

  console.log(tricky2('want'))
//------------------------------------------------------------------------------------------------------------------------------------