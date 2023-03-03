var express = require('express');
var router = express.Router();
var favoritesCtrl = require('../controllers/favorites');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET /
router.get('/favorites', favoritesCtrl.index);


module.exports = router;
