class Person {
    constructor(name, age) {
        if (!name) throw new Error();
        if (age === undefined || age < 0) throw new Error();

        this._name = name;
        this._age = age;
    }

    age() {
        return this._age;
    }

    sayHi() {
        return `Hi, my name is ${this._name} and I'm ${this._age} years old.`
    }

    growOlder() {
        this._age++;
    }
}

module.exports = Person;