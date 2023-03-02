const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// // All routes "starts with" / (root)

// // POST /spots/:id/reviews
router.post('/spots/:id/reviews', ensureLoggedIn, reviewsCtrl.create);

//DELETE /spots/:id/reviews
router.delete('/spots/:spotId/:id/reviews', ensureLoggedIn, reviewsCtrl.delete);

// PUT /reviews/:id
router.put('/reviews/:id', reviewsCtrl.update);


module.exports = router;

