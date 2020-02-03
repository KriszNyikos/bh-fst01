# store

Hozzuk letre sajat storunkat. aruljunk telefonokat, orakat, tableteket, pc-t. A bevetelt tartsuk szamon.

## Phone

### constructor(model: String, price: number)

Legyenek a parameterek propertyk is egyben.

## SmartWatch

### constructor(model: String, price: number)

## Tablet

### constructor(model: String, price: number)

Legyenek a parameterek propertyk is egyben. Legyen meg tovabba 
 - `memorySize`
 - `cpu`

## PC

### constructor(model: String, price: number)

Legyenek a parameterek propertyk is egyben. Legyen meg tovabba 
 - `merorySize`, 
 - `ssdSize`
 - `cpu`

### setMemory(size: Number)

megadja a memoria meretet

## Store

### constructor(name: String)

Legyen propertyk, `phones`, `smartwatches`, `tablets`, `pcs` mind tombok. Legyen egy property `profit` a bevetelre.

### addPhone(phone: Phone)

tudjuk feltolteni a `phones` tombot

### addSmartWatches(watch: SmartWatche)

tudjunk hozzadni orat a tombhoz

### addTablets(tablet: Tablet)

tudjunk hozzadni tabletet a tombhoz 

### addPcs(pc: Pc)

tudjunk hozzaadni pc-t a tombhoz 

### sellDevice(deviceType, model)

vegyuk ki a `deviceType` altal jelolt tombbol (ami lehet `pcs`, `tablets`, `phones`, `smartWatches`) az adott modelt, es az arat adjuk hozza a `profit`-hoz.

### sortProductsByPrice(order: string): []

rendezzuk arak szerint csokkeno vagy novekvo sorrendbe (`order`) az osszes termeket, es ezeket adjuk vissza egy kozos tombben.

### getTotalPrice(): number

Szedjuk ossze az osszes termek erteket, es a profitot a store ertekenek megallapitasara es terjunk vissza vele.

### getter

Irjunk egy generikus metodust amely adott termeket kivesz a `model` alapjan az adott termek tombjebol. Mint a sellDevice-nal.
Visszateresi ertek legyen a device.

## akcios termek

Vegyunk fel egy uj json literalt az akcios termekekhez. Legyen a neve `forSale`. A metodus egy referencia erteket var, amelyet a fentebbi getter metodussal tudunk lekerni. A metodus a referenciat berakja a `forSale` jsonba, a szerint hogy a parameterben kapott objektumnak mi a tipusa.
A tipusa legyen a key, az erteke pedig egy tomb, ami az elemet tartalmazza. Ha mar letezik ez a kulcs a jsonban, akkor az ertekebe csak pusholjuk az uj elemet.

## akcios termekek kiirasa

Irassuk ki az akcios termekeket.