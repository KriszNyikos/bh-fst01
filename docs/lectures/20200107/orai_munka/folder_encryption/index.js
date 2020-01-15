import fs from 'fs';

export function encodeAll(...input) {
    let output = {}
    input.forEach(path => {
        if (fs.existsSync(path)) {
            let buffer = encode(fs.readFileSync(path, 'utf8'))
            output[path] = buffer
        } else {
            output[path] = ''
        }
    })
    return output
}

export function decodeAll(...input) {
    let output = {}
    input.forEach(path => {
        if (fs.existsSync(path)) {
            let buffer = decode(fs.readFileSync(path, 'utf8'))
            output[path] = buffer
        } else {
            output[path] = ''
        }
    })
    return output
};

const secretTable = {
    a: 'b',
    b: 'c',
    l: '_',
    d: '1',
    w: 'm',
    t: 'g',
    o: '#'
};

const encode = (text) => {
    const chars = [...text];

    const buffer = [];

    chars.forEach((char) => {
        if (char in secretTable) {
            buffer.push(secretTable[char])
        } else {
            buffer.push(char);
        }
    })
    return buffer.join('');
};

const decode = (text) => {
    const chars = text.split('');
    const visszaFele = {};
    const buffer = [];

    Object.entries(secretTable).forEach(([key, value]) => {
        visszaFele[value] = key;
    });

    chars.forEach(char => {
        if (char in visszaFele) {
            buffer.push(visszaFele[char]);
        } else {
            buffer.push(char);
        }
    });

    return buffer.join('');
}