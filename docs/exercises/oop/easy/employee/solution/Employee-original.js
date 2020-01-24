const MINIMUM_WAGE = 47000;

class Employee {
    constructor(name, salary) {
        if (!name) throw new Error();
        if (salary < 0) throw new Error();

        this._name = name;
        this._salary = salary || MINIMUM_WAGE;
    }

    raiseSalary(percent) {
        if (percent < 0) throw new Error(); 
        this._salary = this._salary + (percent / 100 * this._salary);
    }

    annualSalary() {
        return this._salary * 12;
    }

    toString() {
        return `Employee[_name="${this._name}",_salary=${this._salary}]`;
    }
}

module.exports = Employee;