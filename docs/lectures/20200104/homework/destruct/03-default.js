// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// az objektumok adatainak kinyerésére. Használjuk a default
// érték megadását az undefined ellenőrzések helyettesítésére.

// (1)
const userData = ['John Doe', 'john@example.com']

const name = userData[0] === undefined? 'N/A' : userData[0]
const email = userData[1] === undefined? 'N/A' : userData[1]
const phone = userData[2] === undefined? 'N/A' : userData[2]

//Megoldás:
    const [name='N/A', email='N/A', phone='N/A'] = userData

console.log(name, email, phone)

(2)

const productData = {
    phones: ['phone 1', 'phone 2', 'phone 3'],
    tablets: ['tablet 1', 'tablet 2'],
    appliances: {
        kitchen: ['blender', 'toaster', 'microwave oven'],
        other: ['iron', 'haircutter']
    }
}

// Figyelem, a nyelvi szabályok miatt, ha nem használunk explicite
// pontosvesszőt, ReferenceError: Cannot access 'products' before initialization
// hibát kaphatunk, amikor a products objektumba próbálunk destrucuringelni
const products = {};

products.phones = productData.phones === undefined? [] : productData.phones
products.tablets = productData.tablets === undefined? [] : productData.tablets
products.kitchen = productData.appliances === undefined? [] : productData.appliances.kitchen === undefined? [] : productData.appliances.kitchen
products.bathroom = productData.appliances === undefined? [] : productData.appliances.bathroom === undefined? [] : productData.appliances.bathroom
products.other = productData.appliances === undefined? [] : productData.appliances.other === undefined? [] : productData.appliances.other

//Megoldás
({ 
    phones: products.phones = [], 
    tablets: products.tablets = [], 
    appliances: {
        kitchen: products.kitchen = [], 
        bathroom: products.bathroom = ['b','a'], 
        other: products.other = []
    } = {} 
});

console.log(products)