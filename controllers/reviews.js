const Spot = require('../models/spot');

module.exports = {
  create,
  delete: deleteReview, 
  update
};

function update(req, res) {
  Spot.findOne({'spots.reviews._id': req.params.id}, function(err, spot) {
    const reviewSubdoc = spot.reviews.id(req.params.id);
    console.log(reviewSubdoc, 'testong SUBDOC')
    if (!reviewSubdoc.userId.equals(req.user._id)) return res.redirect(`/spots/${spot._id}`);
    reviewSubdoc.text = req.body.text;
    spot.save(function(err) {
      res.redirect(`/spots/${spot._id}`);
    });
  });
};

async function deleteReview (req, res) {
  let spot = await Spot.findById(req.params.spotId)
  // if (!spot) return res.redirect('/spots');
  spot.reviews.remove(req.params.id);
  spot.save().then(function() {
    res.redirect(`/spots/${req.params.spotId}`);
  });
};

function create(req, res) {
  Spot.findById(req.params.id, function(err, spot) {
    console.log(req, 'testing req')
    // Add the user-centric info to req.body (the new review)
    req.body.user = req.user._id;
    console.log(req.user.name, 'tesitng ln14')
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log(req.body, 'testing ln 17')
    // We push an object with the data for the review subdoc into Mongoose arrays
    spot.reviews.push(req.body);
    spot.save(function(err) {
      // redirect because mutated data
      res.redirect(`/spots/${spot._id}`);
    });
  });
};

