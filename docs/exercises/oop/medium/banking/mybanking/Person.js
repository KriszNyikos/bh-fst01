let acc = require('./Account');

class Person {
    constructor(cash, accounts) {
        this._accounts = [];
        this._cash = 0;

        if (accounts) { this._accounts = accounts; }
        if (cash < 0) { throw new Error("Positive number required!"); }
        if (cash) { this._cash = cash; }
    }
    cash() {
        return this._cash;
    }
    useCash(amount) {
        if (this._cash > amount) { this._cash -= amount; }
    }
    recieveCash(amount) {
        this._cash += amount;
    }
    totalAssets() {
        return this._cash + sumBalance();
    }
    sumBalance() {
        let num = 0;
        for (let i = 0; i < this.accounts.length; i++) {
            num += this.accounts[i].balance();
        }
        return num;
    }
}

module.exports = Person;