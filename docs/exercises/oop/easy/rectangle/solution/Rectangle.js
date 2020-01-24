class Rectangle {
    constructor(a, b) {
        if (a <= 0 || b <= 0) { throw new RangeError("The numbers must be positive!"); }

        this.a = a;
        this.b = b;
    }

    perimeter() {
        return 2 * this.a + 2 * this.b;
    }

    area() {
        return this.a * this.b;
    }
}

module.exports = Rectangle;
