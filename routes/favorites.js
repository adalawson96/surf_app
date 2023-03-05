var express = require('express');
var router = express.Router();
var favoritesCtrl = require('../controllers/favorites');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET /
router.get('/favorites', ensureLoggedIn, favoritesCtrl.index);

// UPDATE 
router.put('/favorites/:id', ensureLoggedIn, favoritesCtrl.update);



module.exports = router;
