const assert = require('chai').assert;

const Person = require(`./solution/Person`);
const Account = require(`./solution/Account`);

describe('Account', () => {

    describe('constructor(initialDeposit)', () => {

        it('should initialize with a deposit transaction when initialDeposit is provided', () => {
            const acc = new Account(100000);

            assert.deepEqual(acc._transactions, [100000]);
        });

        it('should initialize with empty transaction list when initialDeposit is not provided', () => {
            const acc = new Account();

            assert.isEmpty(acc._transactions);
        });

        it('should initialize with an empty transaction list when initialDeposit is zero', () => {
            const acc = new Account(0);

            assert.isEmpty(acc._transactions);
        });

        it('should throw error when initialDeposit is negative', () => {
            assert.throws(() => new Account(-100000));
        });
        
    });

    describe('balance()', () => {

        it('should return the sum of the transactions', () => {
            const acc = account()

            acc._transactions = [200000, -50000, -75000, 25000]

            assert.strictEqual(acc.balance(), 100000)
        });

    });

    describe('deposit(amount, person)', () => {

        it('should create a deposit transaction', () => {
            const acc = account();
            const pers = person(20000);

            acc.deposit(5000, pers);

            assert.deepEqual(acc._transactions, [5000]);
        });

        it('should decrease the person cash by amount', () => {
            const acc = account();
            const pers = person(20000);

            acc.deposit(5000, pers);

            assert.strictEqual(pers._cash, 15000);
        });

        it('should not modify person cash if person does not have enough cash', () => {
            const acc = account();
            const pers = person(5000);

            acc.deposit(20000, pers);

            assert.strictEqual(pers._cash, 5000);
        });

        it('should not create transaction if person does not have enough cash', () => {
            const acc = account();
            const pers = person(5000);

            acc.deposit(20000, pers);

            assert.deepEqual(acc._transactions, []);
        });

        it('should throw error when amount is not a positive number', () => {
            const acc = account();
            const pers = person(20000);

            assert.throws(() => acc.deposit(-5000, pers));
        });

    });

    describe('withdraw(amount, person)', () => {

        it('should create a withdraw transaction if person has enough cash', () => {
            const acc = account(10000);
            const pers = person(20000);

            acc.withdraw(5000, pers);

            assert.deepEqual(acc._transactions, [10000, -5000]);
        });
        
        it('should increase person cash if person has enough cash', () => {
            const acc = account(10000);
            const pers = person(20000);

            acc.withdraw(5000, pers);

            assert.strictEqual(pers._cash, 25000);
        });

        it('should not modify person cash if account balance is insufficient', () => {
            const acc = account(10000);
            const pers = person(5000);

            acc.withdraw(20000, pers);

            assert.strictEqual(pers._cash, 5000);
        });

        it('should not create a withdraw transaction if account balance is insufficient', () => {
            const acc = account(10000);
            const pers = person(5000);

            acc.withdraw(20000, pers);

            assert.deepEqual(acc._transactions, [10000]);
        });

        it('should throw error when amount is not a positive number', () => {
            const acc = account();
            const pers = person(20000);

            assert.throws(() => acc.withdraw(-5000, pers));
        });

    });

    describe('transfer(amount, toAccount)', () => {
        it('should create a deposit transaction on toAccount', () => {
            const acc1 = account(10000);
            const acc2 = account();

            acc1.transfer(5000, acc2);

            assert.deepEqual(acc2._transactions, [5000]);
        });
        it('should not create a deposit transactions when there is not enough money', () => {
            const acc1 = account(2000);
            const acc2 = account(10000);

            acc1.transfer(5000, acc2);

            assert.deepEqual(acc2._transactions, [10000]);
        });
        it('should create a withdraw transaction on the account', () => {
            const acc1 = account(10000);
            const acc2 = account();

            acc1.transfer(5000, acc2);

            assert.deepEqual(acc1._transactions, [10000, -5000]);
        });
        
        it('should not create withdraw transaction when there is not enough money', () => {
            const acc1 = account(2000);
            const acc2 = account(10000);

            acc1.transfer(5000, acc2);

            assert.deepEqual(acc1._transactions, [2000]);
        });
        it('should throw error when amount is not a positive number', () => {
            const acc1 = account(2000);
            const acc2 = account(10000);

            assert.throws(() => acc1.transfer(0, acc2));
            assert.throws(() => acc1.transfer(-10000, acc2));
        });
        it('should throw error when toAccount is not provided', () => {
            const acc1 = account(2000);

            assert.throws(() => acc1.transfer(5000));
        });
        
    });
});

describe('Person', () => {
    describe('constructor(cash, accounts)', () => {
        it('should throw error when cash is negative', () => {
            assert.throws(() => new Person(-5000));
        })
        it('should initialize _cash with zero when cash is undefined', () => {
            assert.strictEqual(new Person()._cash, 0)
        })
        it('should initialize _accounts with empty array if accounts is undefined', () => {
            assert.deepEqual(new Person()._accounts, [])
        })
    });
    
    describe('cash()', () => {
        it('should return the amount of cash', () => {
            const p = new Person(5000);

            assert.strictEqual(p.cash(), 5000);
        });
    });
    describe('receiveCash(amount)', () => {
        it('should increase _cash by amount', () => {
            const p = new Person(5000);

            p.receiveCash(5000)

            assert.strictEqual(p._cash, 10000);
        });
    });
    describe('useCash(amount)', () => {
        it('should decrease _cash by amount', () => {
            const p = new Person(5000);

            p.useCash(5000)

            assert.strictEqual(p._cash, 0);
        });
        it("should not decrease _cash if there isn't enough cash to use", () => {
            const p = new Person(5000);

            p.useCash(7500)

            assert.strictEqual(p._cash, 5000);
        });
    });
    describe('totalAssets', () => {
        it('should return the sum of cash and sum of balances over all accounts', () => {
            const acc1 = account(10000);
            const acc2 = account(20000);
            const p = new Person(5000, [acc1, acc2]);

            assert.strictEqual(p.totalAssets(), 35000);
        });
    });
});

function person(cash, accounts) {
    let pers = new Person();
    pers._cash = cash || 0;
    pers._accounts = accounts || [];
     
    return pers;
}

function account(initialDeposit) {
    let acc = new Account()
    acc._transactions = initialDeposit? [initialDeposit] : []

    return acc
}