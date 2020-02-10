const express = require('express');
const exphbs  = require('express-handlebars');
const Handlebars = require('handlebars')

const app = express();

app.set('view engine', 'handlebars');
app.engine( 'handlebars', exphbs( {
    extname: 'handlebars',
    defaultView: 'default',
    // layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/'
  }));

app.get('/', function (req, res) {
    res.render('home', {
        layout: 'full'
    });
});

app.get('/other', function (req, res) {
    res.render('other', {
        layout: 'sidebar'
    });
});

app.listen(3000);