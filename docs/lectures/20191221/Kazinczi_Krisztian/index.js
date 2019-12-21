const fs = require('fs');

function oddLines(path) {
    const poem = fs.readFileSync(path).toString();

    let lines = poem.split("\n");

    let newArr = [];

    for (let i = 0; i < lines.length - 1; i++) {
        if(i%2) {newArr.push(lines[i]);}
    }
    return newArr;
}

module.exports = {
    oddLines: oddLines
}