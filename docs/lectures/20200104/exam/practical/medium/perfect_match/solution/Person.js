class Person {
    constructor(traits, preferences) {
        this.traits = traits
        this.preferences = preferences
    }

    recommendations(persons) {
        let result = []
        for(let i = 0; i < persons.length; i++) {
            if (persons[i].traits.match(this.preferences)) result.push(persons[i])
        }

        return result
        // funkcionalisan: return persons.filter(p => p.traits.match(this.preferences))
    }
}

module.exports = Person