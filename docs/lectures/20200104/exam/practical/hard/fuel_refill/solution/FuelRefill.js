class FuelRefill {
    options(gasStations, fuelTypes) {
        const opts = {}

        for(let i = 0; i < fuelTypes.length; i++) {
            opts[fuelTypes[i]] = []
            for(let j = 0; j < gasStations.length; j++) {
                if (gasStations[j].availablePump(fuelTypes[i])) {
                    opts[fuelTypes[i]].push(gasStations[j].name())
                }
            }
        }

        // funkcionalisan:
        // fuelTypes.forEach(t => {
        //     const stations = gasStations.filter(gs => gs.availablePump(t) !== undefined)
        //     if (!stations.length) return

        //     opts[t] = stations.map(s => s.name())
        // })

        return opts
    }
}

module.exports = FuelRefill