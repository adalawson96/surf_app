const Country = require('../models/country');

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
    console.log(req.params.id, 'this is a test line 15')
    Country.findById(req.params.id, function(err, country) {
      res.render('countries/show', { title: country.name, country })
      console.log(country.name)
    })
  };
