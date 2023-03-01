require('dotenv').config();
require('./config/database');
const mongoose = require('mongoose');

const Country = require('./models/country');
const Spot = require('./models/spot');

// For better organization, the seed data is being stored in a separate data.js module
countries = [
    {_id: mongoose.Types.ObjectId(), name: 'US'},
    {_id: mongoose.Types.ObjectId(), name: 'Costa Rica'},
    {_id: mongoose.Types.ObjectId(), name: 'Nicaragua'},
  ];

spots = [
    {country: countries[0]._id, location: 'Peahi, Maui', name: 'Jaws', season: 'Dec-March', waterTemp: 75, waveType: 'reef'},
    {country: countries[1]._id,location: 'Tamarindo', name: 'Pico', season: 'Dec-April', waterTemp: 82, waveType: 'beach break'},
    {country: countries[2]._id,location: 'Playa Colorado', name: 'Panga Drops', season: 'April-September', waterTemp: 77, waveType: 'reef'},
];

const p1 = Country.deleteMany({});
const p2 = Spot.deleteMany({});

async function seed() {
   await Country.deleteMany({});
   await Spot.deleteMany({});
   await Country.insertMany(countries)
   await Spot.insertMany(spots)
   process.exit();
};

 seed()