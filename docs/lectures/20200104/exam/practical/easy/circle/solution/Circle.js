class Circle {
    constructor(r) {
        this.r = r
    }

    perimeter() {
        return 2 * Math.PI * this.r;
    }

    area() {
        return Math.PI * this.r**2;
    }
}

module.exports = Circle;