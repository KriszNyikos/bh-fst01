const express = require('express')
const app = express()
const fetch = require('node-fetch')

app.get('/whoami', (req, res) => {
    console.log(req.headers)
    res.send("Laszlo Szucs\n")
})

app.get('/whois', (req, res) => {

    const url = `http://${req.query.ngrok}.ngrok.io/whoami`
    
    
    fetch(url).then( resp => resp.text() ).then( content => {
        const owner = content
        const output = `${owner} - ${req.query.ngrok}`
    
        console.log(output)
        res.send(output)
    } )

})

app.listen(3000)