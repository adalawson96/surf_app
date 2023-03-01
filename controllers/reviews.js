const Spot = require('../models/spot');

module.exports = {
  create
};

function create(req, res) {
  Spot.findById(req.params.id, function(err, spot) {
    // We push an object with the data for the
    // review subdoc into Mongoose arrays
    spot.reviews.push(req.body);
    spot.save(function(err) {
      // redirect because mutated data
      res.redirect(`/spots/${spot._id}`);
    });
  });
}