const minimumWage = 47000;

class Employee {
    constructor(name, salary) {

        if (name === undefined) {
            throw new Error("Employee is not defined !");
        }
        if (name === "") {
            throw new Error("Enter the name of employee !");
        }
        if (salary < 0) {
            throw new Error("The amount cannot be negative !");
        }
        if (salary < minimumWage) {
            throw new Error("Inapropriate salary !");
        }

        if (salary === undefined) {
            salary = minimumWage;
        }

        this._name = name;
        this._salary = salary;
    }

    raiseSalary(percent) {
        if (percent < 0) {
            throw new Error("Positive number required!");
        }
        let newSalary = this._salary / (percent / 100 * this._salary);
        return newSalary;
    }

    annualSalary() {
        return this._salary * 12;
    }

    toString() {
        return `Employee[_name=${this._name},_salary=${this._salary}]`;
    }
}

module.exports = Employee;

