class Hero {
    constructor(name, powerLevel, life) {
        if (!name) throw new Error('Every Hero has a name!')
        if (powerLevel === undefined || powerLevel < 10) throw new Error('U R not a Hero!')
        if (life === undefined || life < 100) throw new Error('U R not a Hero!')

        this._name = name
        this._powerLevel = powerLevel
        this._life = life
    }

    getHeroDetails() {
      return {
        name: this._name,
        powerLevel: this._powerLevel,
        life: this._life
      }
    }

    attack() {
      return this._powerLevel
    }

    getHit(attackLevel) {
      if (typeof attackLevel !== 'number') throw new Error('AttackLevel must be a number!')
      this._life = this._life - attackLevel
    }

    fury() {
      this._powerLevel = this._powerLevel * 1.1
    }
}


module.exports = Hero;
