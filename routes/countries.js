var express = require('express');
var router = express.Router();
var countriesCtrl = require('../controllers/countries');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('countries/index', countriesCtrl.index);
// });

// All routes start with '/countries'
// GET /countries (display all countries)
router.get('/', countriesCtrl.index);

// GET /countries/:id (display a "show" page for a country)
router.get('/:id', countriesCtrl.show);

module.exports = router;
