class Person {
    constructor(name, age, hobbies) {
        this._name = name;
        this._age = age;
        this._hobbies = hobbies;
    }

    birthYear() {
        return new Date().getFullYear() - this._age;
    }

    sayHi() {
        const hobbiesStr = this._hobbies.join(', ')
        return `Hi, my name is ${this._name} and I'm ${this._age} years old and my hobbies are ${hobbiesStr}.`
    }
}

module.exports = Person;