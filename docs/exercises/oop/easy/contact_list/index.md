Implementáljunk egy kontakt listát!

    ContactList
    -----------
    contacts: Object

    constructor()
    add(name: string, type: string, info: string)
    get(name: string, type: string): string
    update(name: string, type: string, info: string)

## constructor()

Üres objektummal inicializálja a kontakt listát.

## add(name: string, type: string, info: string)

Ha létezik már a adott name névvel az adott type típussal felvitt adat, akkor hibát dobunk.

## get(name, type): string

Ha nem létezik az adott name vagy az adott name alatt egy adott type
típusú adat, akkor hibát dobunk.

## update(name: string, type: string, info: string)

Ha nem létezik az adott name vagy az adott name alatt egy adott type
típusú adat, akkor hibát dobunk.
