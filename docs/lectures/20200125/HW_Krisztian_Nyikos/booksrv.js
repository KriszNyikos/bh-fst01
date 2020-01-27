const express = require('express');
const app = express();
const expbs = require("express-handlebars");

app.engine('handlebars', expbs({ defaultLayout: 'home' }))
app.set('view engine', 'handlebars')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3000;

class Book {
    constructor(id, title, author) {
        this.id = id || Math.floor(Math.random() * 10000)
        this.title = title;
        this.author = author
    }
}

let books = [new Book(undefined, 'Digitális erőd', 'Dan Brown'), new Book(undefined, 'Vaják', 'Andrzej Sapkowski')]


app.get('/books.html', (req, res) => {
    let output = '<table border="1"><tr><th>ID</th><th>Title</th><th>Author</th><th>Operations</th></tr>'
    books.forEach(book => {
        output += '<tr>'
        Object.keys(book).forEach(param => {
            output += '<td>' + book[param] + '</td>'
        })
        output += `<td><a href="edit.html?id=${book.id}">Edit</a>  <a href="delete.html?id=${book.id}">Delete</a></td>`
        output += '</tr>'
    })
    output += '</table>'
    res.render('books', {table: output})
})


app.get('/new-book.html', (req, res) => {
    res.render('new-book')
})

app.get('/edit.html', (req, res)=>{
    let index = books.findIndex(book => book.id == req.query.id)
    let editing_book = books[index]
    let output = '<table border="1"><tr><th>Title</th><th>Author</th></tr>';
        output += `<tr><td>${editing_book.title}</td><td>${editing_book.author}</td></tr>`
    output += '</table>'
    res.render('edit', {table: output, id: req.query.id, title: editing_book.title, author: editing_book.author})
})

app.post('/book/:id/edit', (req, res)=>{
    let index = books.findIndex(book => book.id == req.params.id)
    books[index].title = req.body.title;
    books[index].author = req.body.author;
    res.status(301).send('REDIRECT')
})

app.get('/delete.html', (req, res)=>{
    let index = books.findIndex(book => book.id == req.query.id)
    let editing_book = books[index]
    let output = '<table border="1"><tr><th>Title</th><th>Author</th></tr>';
        output += `<tr><td>${editing_book.title}</td><td>${editing_book.author}</td></tr>`
    output += '</table>'
    res.render('delete', {table: output, id: req.query.id})
})

app.post('/book/:id/delete', (req, res)=>{
    let index = books.findIndex(book => book.id == req.params.id)
    books.splice(index, 1)
    res.status(301).send('REDIRECT')
})

app.get('/new-book.html', (req, res)=>{
    res.render('new-book')
})

app.post('/books', (req, res)=>{
    books.push(new Book(undefined, req.body.title, req.body.author))
    res.status(301).send('REDIRECT')
})

app.listen(PORT, () => console.log(`App is running on ${PORT} port`));