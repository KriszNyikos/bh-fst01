const express = require('express')
const app = express()

const board = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
]

function isFree(x, y) {
    return board[x][y] === undefined
}

let counter = 0

app.get('/place', (req, res) => {
    const {x, y, char} = req.query

    if (!isFree(x, y)) {
        res.send('already taken')
        return
    }

    counter++

    board[x][y] = char

    patterns = [
        [{x:0, y:0}, {x:0, y:1}, {x:0, y:2}],
        [{x:1, y:0}, {x:1, y:1}, {x:1, y:2}],
        [{x:2, y:0}, {x:2, y:1}, {x:2, y:2}],
        [{x:0, y:0}, {x:1, y:0}, {x:2, y:0}],
        [{x:0, y:1}, {x:1, y:1}, {x:2, y:1}],
        [{x:0, y:2}, {x:1, y:2}, {x:2, y:2}],
        [{x:0, y:0}, {x:1, y:1}, {x:2, y:2}],
        [{x:0, y:2}, {x:1, y:1}, {x:2, y:0}]
    ]


    let winner
    patterns.forEach(ptn => {
        if (ptn.every(coord => board[coord.x][coord.y] == char)) {
            winner = char
        }
    })

    if (winner) {
        res.send(`the winner is ${char}`)
        return
    }

    if (counter === 9) {
        res.send("it's a tie!")
        return
    }

    res.send('open the table!')


})

app.get('/board', (req, res) => {
    let tbl = "<table >"
    for ( x in board)  {
        tbl += "<tr>"
        for (y in board[x]) {
            tbl += `<td style='border: 1px solid red'>${board[x][y]? board[x][y] : ''}</td>`
        }
        tbl += "</tr>"
    }

    res.send(tbl)
})

app.listen(3030)