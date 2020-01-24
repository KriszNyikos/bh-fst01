class Account {
    constructor(initialDeposit) {
        this._transactions = [];
        
        if (initialDeposit) {
            if (initialDeposit > 0) {
                this.initialDeposit = initialDeposit;
            } else if (initialDeposit < 0) {
                throw new Error("Must be a positive number!");
            }
        }
    }

    balance() {
        let arrSum = this._transactions.reduce((a,b) => a+b, 0);
        return arrSum;
    }
    transfer(amount, toAccount) {

    }
    deposit(amount, person) {

    }
    withdraw(amount, person) {

    }
}

module.exports = Account;