const User = require('../models/user');

module.exports = {
    index
};

function index(req, res) {
    // User.favorites.find({}, function(err, favorites) {
        res.render('favorites/index', { title: 'Favorites' });
    // });
  };
