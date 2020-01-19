const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/form', (req, res) => {
    res.sendFile('/home/csabai/Projects/bh/bh-fst01/docs/lectures/20200118/counter/static/calculator.html');
});

app.post('/calculate', (req, res) => {
    const {a, b, ops} = req.body;
    let result = 0;

    if (ops === '+') {
        result = +a + +b;
    } else if(ops === '-') {
        result = +a - +b;
    } else if (ops === '/') {
        result = +a / +b;
    } else if (ops === '*') {
        result = +a * +b;
    }

    db.serialize(function() {
        const stmt = db.prepare("INSERT INTO result VALUES (?)");
        stmt.run(result.toString());
        stmt.finalize();
    });

    res.redirect('/result');
});

app.get('/result', (req, res) => {
    db.serialize(function() {
        db.each("SELECT rowid AS id, value FROM result ORDER BY Id DESC LIMIT 1", function(err, row) {
            console.log(row)
            res.send(row.value.toString());
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

    db.serialize(function() {
        db.run("CREATE TABLE result (value TEXT)");
    });

    // db.close();
});
