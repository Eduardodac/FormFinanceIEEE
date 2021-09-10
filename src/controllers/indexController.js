const db = require('../database/models');
const { v4: getID } = require("uuid");
const { validationResult } = require("express-validator");

const indexController = {
    'main': (req, res, next) => {
        res.render('index');
    },
    'register': (req, res, next) => {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let usuario = {
                id: getID(),
                name: req.body.nombre,
                age: req.body.edad,
                email: req.body.email,
                conocimientosPrevios: req.body.conocimientosPrevios,
                inversionesAnteriores: req.body.inversionesAnteriores,
                miembroIEEE: req.body.miembroIEEE,
            };
            db.Registro.create({
                    ...usuario,
                })
                .then(resultado => {
                    res.render("agradecimiento")
                })
                .catch(err => {
                    res.send("error!: " + err)
                })
        } else {
            res.render('index', {
                errors: errors.mapped(),
                old: req.body
            });

        };
    },
}

module.exports = indexController;