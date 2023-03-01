const mongoose = require('mongoose');
// Shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;


  const countrySchema = new Schema({
    name: {
      type: String,
      required: true
    },
  }, {
    timestamps: true
  });
  
  module.exports = mongoose.model('Country', countrySchema);