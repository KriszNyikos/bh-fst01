class Traits {
    constructor(nice, funny) {
        this.nice = nice === undefined? false : nice
        this.funny = funny === undefined ? false : funny
    }

    match(other) {
        return this.nice === other.nice && this.funny === other.funny
    }
}

module.exports = Traits