const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    content: {
      type: String,
      required: true
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });

// // GET /spots (display all spots)

const spotSchema = new Schema({
  image: {
    type: String
  },
  spotImage: {
    type: String
  },
  name: {
        type: String,
        required: true
      },
  location: {
            type: String,
            required: true
  }, 
  season: {
          type: String,
          required: true
  }, 
  waterTemp: {
          type: String,
          required: true
  }, 
  waveType: {
          type: String,
          required: true,
  }, 
  description: {
              type: String,
              required: true,
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

