class GasStation {
    constructor(name, pumps) {
        if (!pumps) throw new Error('pumps undefined')
        if (!pumps.length) throw new Error('pumps empty')
        if (!name) throw new Error('name must be nonempty string')

        this._name = name
        this._pumps = pumps
    }

    name() {
        return this._name
    }

    availablePump(fuelType) {
        for(let i = 0; i < this._pumps.length; i++) {
            let pump = this._pumps[i]
            if (pump.fuelType() === fuelType && pump.isAvailable()) {
                return pump
            }
        }
        // funkcionalisan: return this._pumps.find(p => (p.fuelType() === fuelType) && p.isAvailable())
    }
}

module.exports = GasStation