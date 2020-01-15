const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./sqlhw01', (err) => {
    if (err) {
        return console.error(err.message);
    }
    // console.log('Database connection is succesfull')
});



const fs = require('fs')

db.serialize(() => {
    db.all('SELECT nominee FROM awards WHERE ceremony = 5', (err, rows) => {
        console.log('Azon a színészek a nevei, akiket az 5. díjátadón jelöltek:\n')
        if (err) { throw err }
        rows.forEach(row => console.log(row.nominee))
        console.log('\n')
    })

    db.all('SELECT DISTINCT nominee, year_award FROM awards WHERE year_award >= 1950 AND year_award < 1960', (err, rows) => {
        console.log('Az 1950-es években jelölt színészek nevei:\n')
        if (err) { throw err }
        rows.forEach(row => console.log(row.nominee, row.year_award))
    })

})