const Spot = require('../models/spot');
// const Country = require('../models/country');

module.exports = {
    index,
    show
  };

  function index(req, res) {
    Spot.find({}, function(err, spots) {
      res.render('spots/index', { title: 'All Spots', spots });
    });
  };
  
  function show(req, res) {
    Spot.findById(req.params.id, function(err, spot) {
      res.render('spots/show', { title: spot.location, spot })
    })
  };

