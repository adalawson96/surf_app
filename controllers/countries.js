const Country = require('../models/country');
// const Spot = require('../models/spot');

module.exports = {
    index,
    show
};

function index(req, res) {
    Country.find({}, function(err, countries) {
      res.render('countries/index', { title: 'All Countries', countries });
    });
  };
  
  function show(req, res) {
    Country.findById(req.params.id, function(err, country) {
      res.render('countries/show', { title: country.name, country })
    });
  };
 
