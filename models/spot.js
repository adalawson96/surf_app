const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
  }, {
    timestamps: true
  });

// // GET /spots (display all spots)

const spotSchema = new Schema({
    name: {
        type: String,
        required: true
      },
    reviews: [reviewSchema],
    country: {
      type: Schema.Types.ObjectId,
      ref: "Country",
      required: true,
    }
}, {
  timestamps: true
});

module.exports = mongoose.model('Spot', spotSchema);

