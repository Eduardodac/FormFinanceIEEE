var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', indexController.main);
router.get('/mini', indexController.user);

module.exports = router;