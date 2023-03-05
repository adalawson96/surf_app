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
    {country: countries[0]._id, location: 'Peahi Maui, US', name: 'Jaws', season: 'Dec-March', waterTemp: 75, waveType: 'reef', image: "https://www.surf-forecast.com/locationmaps/Jaws.10.gif", spotImage: "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2021/12/22/j7f1bleglww0gsrbjl66/wsl-big-wave-jaws-weather-window-day-1-art", coverImage: "http://www.espn.com/photo/2016/0125/021_Surf_JAWS.JPG", description:'Jaws is probably the largest, heaviest, and fastest wave of the Pacific Ocean producing waves ranging between 30 and 80 feet.', level: 'Advanced', forecast: "https://magicseaweed.com/Peahi-Jaws-Surf-Report/617/"},

    {country: countries[1]._id,location: 'Tamarindo, Costa Rica', name: 'Pico', season: 'Dec-April', waterTemp: 82, waveType: 'rock/reef',  image: "https://i.imgur.com/VDOFwb0.png", spotImage: "https://witchsrocksurfcamp.com/wp-content/uploads/2018/10/pico-grande-surf-spot-tamarindo-costa-rica.jpg.webp", coverImage: "https://lushpalm.com/wp-content/uploads/2017/10/tamarindo-costa-rica-surf-samba-to-the-sea-10.jpg", description: 'Pico is marked by a lava-thumb reef. The wave ~50 meters long best wind direction light offshore.', level: 'Beginner, Intermediate, Advanced', forecast: "https://magicseaweed.com/Tamarindo-Surf-Report/444/"},
    
    {country: countries[2]._id,location: 'North end of Playa Colorado, Nicaragua', name: 'Panga Drops', season: 'April-September', waterTemp: 77, waveType: 'reef', image: "https://i.imgur.com/rzqd7Ga.png", spotImage: "https://s3.amazonaws.com/nsr-production/photos/attachments/565392235d39057fe460a91f4a34fd0a6ae7d5fd.jpg?1523520829",  coverImage: "https://i.imgur.com/KbqSYOm.jpg", description: 'Pangas enjoys offshore bathymetry, but it is a horseshoe reef rather than perfectly crafted sandbars.', level: 'Intermediate, Advanced', forecast: "https://magicseaweed.com/Panga-Drops-Surf-Report/4741/"},
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