class PetStore {
    constructor(pets) {
        this.pets = pets
    }

    listPets(species) {
        if (!species) return this.pets
        
        let result = []
        for (let i = 0; i < this.pets.length; i++) {
            let p = this.pets[i]
            if (p.species === species) {
                result.push(p)
            }
        }
        return result
        
        // funkcionalisan: return this.pets.filter(p => p.species === species)
    }

    buy(name) {
        if (!name) throw new Error('name parameter missing')

        // funkcionalisan: const idx = this.pets.findIndex(p => p.name === name)
        let idx = -1
        for (let i = 0; i < this.pets.length; i++) {
            if(this.pets[i].name === name) {
                idx = i
                break
            }
        }

        if (idx === -1) throw new Error('pet not found in pet store')

        return this.pets.splice(idx, 1).pop()
    }
}

module.exports = PetStore