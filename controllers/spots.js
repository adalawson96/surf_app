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
  }
  
  function show(req, res) {
    console.log(req.params.id, 'controllers SPOT.JS line 15')
    Spot.findById(req.params.id, function(err, spot) {
      res.render('spots/show', { title: spot.name, spot })
    })
  };

