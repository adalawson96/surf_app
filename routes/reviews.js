const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// // All routes "starts with" / (root)

// // POST /countries/:id/reviews
router.post('/spots/:id/reviews', reviewsCtrl.create);

module.exports = router;