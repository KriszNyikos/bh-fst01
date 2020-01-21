function padded(width, char, value) {
    const str = String(value)
    return char + str + char.repeat(width - str.length - 1)
}

export default class {
    constructor(width) {
        this.width = width
    }

    box(value) {
        console.log('*'.repeat(this.width))
        console.log('*' + padded(this.width - 2, ' ', value) + '*' )
        console.log('*'.repeat(this.width))
    }
}