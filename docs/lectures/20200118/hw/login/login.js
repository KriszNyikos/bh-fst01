const http = require('http');

const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./login', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Database connection is succesfull')
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
const port = 3000

const base_path = 'D:/Braining hub/bh-fst01/docs/lectures/20200118/hw/login' // Ezt majd meg kell változtatni az aktuális mappanézetre

app.get('/', (req, res) => {
    res.sendFile(`${base_path}/login.html`)
})

app.use('/login', (req, res, next) => {
    if (req.body.name && req.body.email && req.body.passw) {
        next()
    }
    console.log('nem megfelelő adatok')
    res.sendFile(`${base_path}/login.html`)
})

app.post('/login', (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    let passw = req.body.passw;
    db.serialize(() => {
        db.run(`INSERT INTO login_table (name, email, passw) VALUES ('${name}', '${email}', '${passw}')`, (err) => {
            if (err) {
                console.log(err)
            }
        })
    })
    db.all('SELECT * FROM login_table', (err, rows) => {
        console.log(rows)
    })
    res.redirect('/')
})


let middleware = (req, res, next) =>{  // to check the database
    db.serialize(()=>{
        db.all('SELECT * FROM login_table', (err, rows) => {
            if(err) {throw err};
    
            if (!rows.length) {
                // console.log(rows)
                res.send('Nincsenek adatok az adatbázisban')
            } else {next()}
            
        })
    })
}

// Alternate middleware

// app.use('/users', (req, res, next)=>{
//     db.all('SELECT * FROM login_table', (err, rows) => {
//         if (!rows.length) {
//             res.writeHead(200, { 'Content-Type': 'text/plain' });
//             res.write('Nincsenek adatok az adatbázisban')
//         }
//         next()
//     })
// })

app.get('/users', middleware, (req, res) => {
    db.serialize(()=>{
        db.all('SELECT * FROM login_table', (err, rows) => {
            let header = '<table style="width:20%" border="1">\n<tr>\n<th>Name</th>\n<th>Email</th>\n<th>Password</th>\n</tr>'
            let output = rows.map(x => x=`\n<tr>\n<td>${x.name}</td>\n<td>${x.email}</td>\n<td>${x.passw}</td>\n</tr>`).join('')
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(header+output+'\n</table>');
            res.end();
        })
    })
    

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
    db.serialize(() => {
        const createSQL = 'CREATE TABLE IF NOT EXISTS login_table (name TEXT, email TEXT, passw TEXT)'
        db.run(createSQL, (err) => { console.log(err) })
        db.all('SELECT * FROM login_table', (err, rows) => {
            // console.log(rows)
        })
    })
})
