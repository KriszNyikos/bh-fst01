// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// az objektumok adatainak kinyerésére

// (1)

const person = { first: 'John', last: 'Doe' }

const first = obj.first
const last = obj.last
//Megoldás:
    const {first, last} = person

console.log(first, last)

// (2)

person.address = {
    city: 'Whasington',
    state: 'DC',
    street: '6th street'
}
const state = person.address.state
//Megoldás:
    const {address: {state}} = person

console.log(state)