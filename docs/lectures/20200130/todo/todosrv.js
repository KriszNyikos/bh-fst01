const express = require('express');
const fs = require('fs');
const exphbs  = require('express-handlebars');

const app = express();
const port = 5000;

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let todolist = [
    {
        "id": 1,
        "title":"Vidd le a szemetet",
        "done":false
    },
    {
        "id": 2,
        "title":"Ellenséget eltiporni",
        "done":false
    },
    {
        "id": 3,
        "title":"Láncraverve hajtani",
        "done":false
    }
];


app.get('/add.html', function (req, res) {
    res.render('addNewItem', {});
});

app.get('/list.html', function (req, res) {
    res.render('listItems', {todolist: todolist});
});

app.post('/todo', function(req, res) {
    console.log(req.body.itemName);
    console.log(req.body.itemDone);
    res.render('addNewItem', {});
});

app.get("/mark_as_done/:id", function(req, res) {
    const itemId = req.params.id;

    todolist.forEach(function(item) {
            if(item.id == itemId) {
                item.done = true;
            }
        }
    );

    res.redirect("/list.html");
});

app.post("/mark_as_done", function(req, res) {
    
    const itemId = req.body.id;
    todolist.forEach(function(item) {
            if(item.id == itemId) {
                item.done = true;
            }
        }
    );

    res.send("OK");
});

app.listen(port, () => {
    console.log(`app is started on port ${port}`);
});