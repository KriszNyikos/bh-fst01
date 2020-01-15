// // Írjuk át a kódrészleteket, hogy destructuringet használjanak
// // az objektumok adatainak kinyerésére. Használjuk a default
// // érték megadását az undefined ellenőrzések helyettesítésére.

// // (1)
const userData = ['John Doe', 'john@example.com']

const name = userData[0] === undefined? 'N/A' : userData[0]
const email = userData[1] === undefined? 'N/A' : userData[1]
const phone = userData[2] === undefined? 'N/A' : userData[2]

console.log(name, email, phone)

Megoldás
const userData = ['John Doe', 'john@example.com']

const [name = 'N/A', email = 'N/A', phone = 'N/A'] = userData
console.log(name, email, phone)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------

// (2)

const productData = {
    phones: ['phone 1', 'phone 2', 'phone 3'],
    tablets: ['tablet 1', 'tablet 2'],
    appliances: {
        kitchen: ['blender', 'toaster', 'microwave oven'],
        other: ['iron', 'haircutter']
    }
}

// Megoldás
const { phones = [], tablets = [], appliances = [], valamiaminincs = [] } = productData
console.log(phones, tablets, appliances.kitchen, valamiaminincs)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------


// Figyelem, a nyelvi szabályok miatt, ha nem használunk explicite
// pontosvesszőt, ReferenceError: Cannot access 'products' before initialization
// hibát kaphatunk, amikor a products objektumba próbálunk destrucuringelni
// const products = {};

products.phones = productData.phones === undefined? [] : productData.phones
products.tablets = productData.tablets === undefined? [] : productData.tablets
products.kitchen = productData.appliances === undefined? [] : productData.appliances.kitchen === undefined? [] : productData.appliances.kitchen
products.bathroom = productData.appliances === undefined? [] : productData.appliances.bathroom === undefined? [] : productData.appliances.bathroom
products.other = productData.appliances === undefined? [] : productData.appliances.other === undefined? [] : productData.appliances.other

console.log(products)

// Megoldás

let products2 = {};
const {phones = [], tablets = [] , appliances : {kitchen = [], bathroom =[], other =[]}} = productData

products2 = {phones, tablets, kitchen , bathroom, other}

// IF CONST PRODUCST IS NECESSARY

// products2.phones = phones;
// products2.tablets = tablets;
// products2.kitchen = kitchen;
// products2.other = other;
// products2.bathroom = bathroom;

console.log(products2)
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------
