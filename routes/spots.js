var express = require('express');
var router = express.Router();
var spotsCtrl = require('../controllers/spots');

// GET /spots (display all spots)
router.get('/', spotsCtrl.index);

// GET /spots/:id (display a "show" page for a spot)
router.get('/:id', spotsCtrl.show);

// Use ensureLoggedIn middleware to protect routes
// router.post('/', ensureLoggedIn, spotsCtrl.create);

module.exports = router;
