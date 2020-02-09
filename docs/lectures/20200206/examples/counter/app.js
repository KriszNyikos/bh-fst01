const express = require('express')
const app = express()
const port = 3000
const Handlebars = require('handlebars')

let counter = 0

app.get('/', (req, res) => {
    counter++
    const compiled = Handlebars.compile(contents)
    res.send(compiled({count: counter}));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))