var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const { check } = require('express-validator');

let validateRegister = [
    check('nombre')
    .notEmpty().withMessage("Debes llenar este campo").bail()
    .isLength({ min: 3 }).withMessage("Debe tener al menos 3 caracteres"),
    check('email')
    .notEmpty().withMessage("Debes llenar este campo").bail()
    .isEmail().withMessage("Debe ser una dirección de correo válida"),
    check('edad')
    .notEmpty().withMessage("Debes llenar este campo").bail()
    .isInt().withMessage('Solo se aceptan caracteres numéricos'),
]

/* GET home page. */
router.get('/', indexController.main);
router.post('/', validateRegister, indexController.register);
router.get('/asd/rti/bd', indexController.lista)

module.exports = router;