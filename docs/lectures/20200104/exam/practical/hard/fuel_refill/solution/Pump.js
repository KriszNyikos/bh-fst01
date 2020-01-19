class Pump {
    constructor(fuelType, available) {
        if (!fuelType) throw new Error('fuelType undefined')

        this._fuelType = fuelType
        this._available = available || false
    }

    fuelType() {
        return this._fuelType
    }

    isAvailable() {
        return this._available
    }
}

module.exports = Pump