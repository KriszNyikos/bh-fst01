let users = [
    'csaba',
    'bela',
    'valaki'
];

let isOk = {
    name: '',
    authenticated: false
}

const absPath = "/home/csabai/Projects/bh/bh-fst01/docs/lectures/20200118/helloWorld/static";

module.exports = {
    getUsers(req, res) {
        res.send(users);
    },

    isAuthenticated(req, res, next) {
        if (isOk.authenticated) next();

        res.status(401).sendFile(`${absPath}/401.html`);
    },

    authenticate(req, res) {
        const {username} = req.params;

        isOk.name = username;
        isOk.authenticated = true;

        res.send('authenticated');
    },

    manageUser(req, res) {
        const {username} = req.params;
        const {mode} = req.query;


        if (mode === 'add') {
            if (!users.includes(username)) {
                users.push(username);
            }
        } else if (mode === 'delete') {
            if (users.includes(username)) {
                users = users.filter( user => user !== username );
            }
        } else {

        }

        res.send(users);
    },

    isExist(req, res, next) {
        if (users) {
            console.log('users data exists');
            next();
        }
        

        res.send('users data does not exist');
    },

    notFound(req, res) {
        res.status(404).sendFile(`${absPath}/404.html`);
    },

    addUserFromForm(req, res) {
        res.sendFile(`${absPath}/addUser.html`);
    },

    addNewUser(req, res) {
        const data = req.body;

        users.push(data.username);

        res.status(204).send('ok');
    }
};
