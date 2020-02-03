Implementáljunk egy kávégépet

# CoffeeMachine

    CoffeeMachine
    -------------
    waterCap: number
    coffeeCap: number
    on: bool
    water: number
    coffee: number

    constructor(waterCap, coffeCap)
    power()
    refill()
    espresso()
    americano()



## constructor(waterCap, coffeCap)

Alapértékek
- on: false
- water, coffee: 0

## power()

A kávégépet ki-be kapcsolja

## refill()

Teletölti a kávégépet vízzel és kávéval

## espresso()

40 egység kávé és 20 egység víz elhasznál. Ha nincs elegendő víz vagy kávé vagy nincs
bekapcsolva a gép, hibát dob.

## americano()

40 egység kávé és 80 egység víz elhasznál. Ha nincs elegendő víz vagy kávé vagy nincs
bekapcsolva a gép, hibát dob.
