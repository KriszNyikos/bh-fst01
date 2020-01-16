const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./sqlhw01', (err) => {
    if (err) {
        return console.error(err.message);
    }
    // console.log('Database connection is succesfull')
});



const fs = require('fs')

db.serialize(() => {

    switch (process.argv[2]) {
        case '1':
            db.all(`SELECT DISTINCT nominee FROM awards WHERE ceremony = ${process.argv[3]}`, (err, rows) => {
                console.log(`1. lekérdezés: Azon a színészek a nevei, akiket az ${process.argv[3]}. díjátadón jelöltek:\n`)
                if (err) { throw err }
                rows.forEach(row => console.log(row.nominee))
            })
            break;

        case '2':
            db.all(`SELECT DISTINCT nominee FROM awards WHERE ceremony = ${process.argv[3]} AND win = 'True'`, (err, rows) => {
                console.log(`2. lekérdezés: Azon a színészek a nevei, akiket az ${process.argv[3]}. díjátadón jelöltek, és díjat is kaptak:\n`)
                if (err) { throw err }
                rows.forEach(row => console.log(row.nominee))
            })
            break;

        case '3':
            db.all(`SELECT DISTINCT nominee, year_award FROM awards WHERE year_award >= 19${process.argv[3]} AND year_award < 19${parseInt(process.argv[3]) + 10};`, (err, rows) => {
                console.log(`Az 19${process.argv[3]}-es években jelölt színészek nevei:`)
                if (err) { throw err }
                rows.forEach(row => console.log(row.nominee, row.year_award))
            })
            break;

        case '4':
            let input = [process.argv[3],process.argv[4]].join(' ')
            console.log(input)
            db.all(`SELECT DISTINCT l.year_award FROM awards l 
                     INNER JOIN awards r ON r.year_award = l.year_award-1 
                     WHERE l.nominee = '${input}'
                     AND r.nominee = '${input}'
                     AND r.win = 'False' 
                     AND l.win = 'True';`,(err, rows) => {
                console.log(`Azoknak az éveknek a listája, amikor ${input} úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert.`)
                if (err) { throw err }
                rows.forEach(row => console.log(row.year_award))
            })
            break;

        default: 
            console.log('nem adtad meg a lekérdezés sorszámát')
            break;
    }


    // db.all('SELECT nominee FROM awards WHERE ceremony = 5', (err, rows) => {
    //     console.log('Azon a színészek a nevei, akiket az 5. díjátadón jelöltek:\n')
    //     if (err) { throw err }
    //     rows.forEach(row => console.log(row.nominee))
    //     console.log('\n')
    // })

    // db.all('SELECT DISTINCT nominee, year_award FROM awards WHERE year_award >= 1950 AND year_award < 1960', (err, rows) => {
    //     console.log('Az 1950-es években jelölt színészek nevei:\n')
    //     if (err) { throw err }
    //     rows.forEach(row => console.log(row.nominee, row.year_award))
    // })

})