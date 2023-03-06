const { save } = require('debug/src/browser');
const User = require('../models/user');

module.exports = {
    index,
    update
};

async function index(req, res) {
   user = await User.findById(req.user._id) 
   .populate('favorites')
   .exec()
        res.render('favorites/index', { title: 'Favorites', favorites: user.favorites });
};


async function update(req, res) {
    user = await User.findOne(req.user._id)
    if (!user.favorites.includes(req.params.id)) {
        user.favorites.push(req.params.id)
       await user.save()
    };
    res.render('favorites/index', { title: 'Favorites'})
};
