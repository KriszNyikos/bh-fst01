const express = require('express');
const fs = require('fs');
const exphbs  = require('express-handlebars');

const app = express();
const port = 5000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/myhandle', function (req, res) {
    res.render('home', {name: 'Csaba'});
});


app.get('/hello/:name', (req, res) => {
    const {name} = req.params;

    const template = fs.readFileSync('static/index.html');
    const str = template.toString();

    res.status(200).send(str.replace('{name}', name));
});

app.post('/firstFetchStuff', (req, res) => {
    res.json({name: 'csaba', prop: 1234, nested: [{'asd': 1234}]});
});

const db = {};

app.get('/getdata', (req, res) => {
    res.json(db);
});

app.post('/add/:name', (req, res) => {
    const {name} = req.params;

    db[name] = req.body;

    res.sendStatus(204);
});

app.get('/pingui', (req, res) => {
    res.render('pingpong');
})

app.get('/ping', (req, res) => {
    res.json('ping'); // ui-on: resp.json()
    // res.send('ping'); // ui-on: helyette resp.text()
});

app.listen(port, () => {
    console.log(`app is started on port ${port}`);
});
