// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// az objektumok adatainak kinyerésére

// (1)

const person = { first: 'John', last: 'Doe' }

const first = person.first   // Itt az obj. helyett a person-nak kellene állnia
const last = person.last   // Itt az obj. helyett a person-nak kellene állnia

console.log(first, last)

// Megoldás
const person2 = { first2: 'John', last2: 'Doe' }
const {first2, last2} = person2
console.log(first2, last2)

//----------------------------------------------------------------------------------------------------------------------------------------------------

// (2)

person.address = {
    city: 'Whasington',
    state: 'DC',
    street: '6th street'
}
const state = person.address.state

console.log(state) 

// Megoldás

person2.address2 = {
    city2: 'Whasington',
    state2: 'DC',
    street2: '6th street'
}

const {state2} = person2.address2

console.log(state2)

//----------------------------------------------------------------------------------------------------------------------------------------------------
