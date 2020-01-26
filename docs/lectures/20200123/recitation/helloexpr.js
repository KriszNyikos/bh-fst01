const express = require('express')
const app = express()
const port = 3000

app.get('/whoami', (req, res) => {
    console.log(req.query)
    res.json(req.query)
})
app.use(express.static('public'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))