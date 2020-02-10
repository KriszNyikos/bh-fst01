const express = require('express')
const app = express()
const port = 3000
const Handlebars = require('handlebars')

app.get('/hello', (req, res) => {
    const compiled = Handlebars.compile('hello {{name}}')
    res.send(compiled({
        name: ''
    }));
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))