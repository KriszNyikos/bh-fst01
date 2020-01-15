// Írjuk át a function expressionöket, ahol lehet,
// arrow functionre. A paramétereken és a visszatérési értékeken
// ne változtassunk. Nem minden esetben lehetséges az
// átírás!

// (1)

let steve = {
    name: 'Steve',
    intro: function() { return `My name is ${this.name}` },
    mood: function(weather) {
        switch(weather) {
            case 'rainy': return this.rainy()
            case 'sunny': return this.sunny()
            default: return this.default()
        }
    },
    rainy: function() {
        return 'coding'
    },
    sunny: function() {
        return 'swimmimg'
    },
    default: function() {

    }

}
console.log(steve.intro())
console.log(steve.mood('rainy')) // == 'coding'

// // // Megoldás

let steve2 = {
    name: 'Steve',
    intro: function() { return `My name is ${this.name}` },

    mood: (weather) => ({
        'rainy' : 'coding' || {},
        'sunny' : 'swimming' || {}
    }) [weather]

}
console.log(steve2.intro())
console.log(steve2.mood('rainy')) // == 'coding'


// //------------------------------------------------------------------------------------------------------------------------------------


// (2)

const factory = {
    manufacturer: 'Fjord',
    mechanic: function() {
        let that = this
        return {
            canFix: function(car) {
                return car.manufacturer === that.manufacturer
            }
        }
    }
}

const car = {manufacturer: 'Fjord'}
console.log(factory.mechanic().canFix(car)) // == true

// // Megoldás

const factory2 = {
    manufacturer: 'Fjord',
    mechanic: function() {
        let that = this
        return () => (car) => car.manufacturer === that.manufacturer
    }
}

const car2 = {manufacturer: 'Fjord'}
console.log(factory2.mechanic()()(car2)) // == true

// //------------------------------------------------------------------------------------------------------------------------------------