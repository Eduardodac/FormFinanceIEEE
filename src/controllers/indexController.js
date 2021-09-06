const indexController = {
    'main': (req, res, next) => {
        res.render('index');
    },
    'user': (req, res, next) => {
        res.send('reenvia el formulario');
    },
}

module.exports = indexController;