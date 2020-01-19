const express = require('express');

const helloController = require('./controllers/helloController.js');
const userController = require('./controllers/userController.js');

const app = express();
const router = express.Router();
const port = 5000;

let counter = 0;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/counter', (req, res) => {
    counter += 1;

    res.send(`counter is: ${counter}`);
});

router.get('/authenticate/:username', userController.authenticate);

router.use('/users', userController.isAuthenticated);

router.use('/users', userController.isExist);

router.get('/users', userController.getUsers);

router.get('/users', userController.manageUser);
 
router.post('/addUser', userController.addNewUser);

router.get('/addform', userController.addUserFromForm);

app.get('/hello/:name', helloController.helloByName);

app.get('/simplehello', helloController.simpleHello);

app.get('/hello', (req, res) => { 
    res.send('hello world!');
});

app.use('/', router);

//app.get('/*', userController.notFound);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
