const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');

const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


function getUsersFromDB(callback) {
    db.serialize(() => {
        db.all("SELECT * FROM users", (err, rows) => {
            callback(rows);
        });
    });
}

app.get('/users', (req, res) => {
    
    getUsersFromDB( (users) => {
        // todod table here
       res.send(users);

    });

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);

    db.serialize(() => {
        db.run("CREATE TABLE users (username TEXT, email TEXT, password TEXT)");

        const prep = db.prepare('INSERT into users VALUES (?, ?, ?)');

        const users = [
            ['csaba', 'csaba@test.com', 'holmi'],
            ['valakimas', 'valaki@huha.com', 'titkosjelszo']
        ];

        users.forEach( user => prep.run(...user) );
        prep.finalize();

        db.each("SELECT * FROM users", (err, row) => {
            console.log(`username ${row.username}`);
        });

    });

    // db.close();
});
