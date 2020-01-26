class Dining {
    constructor(guests, restaurants) {
        this._guests = guests;
        this._restaurants = restaurants;
    }

    options() {
        return this._restaurants.filter(
            restaurant => this._guests.every(
                guest => restaurant.recommendations(guest.dispreferences()).length > 0
            )
        );
    }
}

module.exports = Dining;