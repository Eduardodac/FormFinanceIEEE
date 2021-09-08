const indexController = {
    'main': (req, res, next) => {
        res.render('index');
    },
    'user': (req, res, next) => {
        res.render('agradecimiento');
    },
}

module.exports = indexController;