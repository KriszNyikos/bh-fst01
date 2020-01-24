class Person {
    constructor(name, age) {
        if (!name || !age) { throw new Error("Enter your data!"); }
        if (age < 0) { throw new Error("Name or age is uncorrect!"); }

        this.name = name;
        this._age = age;
    }
    age() {
        return this._age;
    }
    sayHi() {
        return `Hi, my name is ${this.name} and I'm ${this._age} years old.`;
    }
    growOlder() {
        this._age++;
    }
}

module.exports = Person;