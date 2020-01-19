module.exports = {
    helloByName(req, res) {
        const { name } = req.params;  // url parameter

        const {lang} = req.query;     // query string

        const sayHi = lang === 'hu' ? 'szia' : 'hello';

        res.send(`${sayHi} ${name}`);
    },


    simpleHello(req, res) {
        res.send('hello World!');
    }
}
