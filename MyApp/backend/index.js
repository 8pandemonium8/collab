console.log("Starting backend server");

require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const mongoUri = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_CLUSTER}.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(mongoUri)
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("error in connecting to mongodb", err));

  const influencerSchemaWithId = new mongoose.Schema({
      Id: String,
      Name: String,
      Description: String,
      Imageurl: String,
      Ratings: String,
      NoOfRatings: String,
      ytSubs: String,
      instaFollowers: String,
      XFollowers: String,
      fbFollowers: String,
      Location: String,
      coverPhoto: String,
      email: String,
      expect: String,
      fbLink: String,
      instaLink: String,
      xLink: String,
      ytLink: String,
      phNumber: String,
      hashtags: [String],
      reviews: [String]
});

const InfluencerModelWithId = mongoose.model('influencer_profile_cards', influencerSchemaWithId);

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/bruh', (req, res) => {
  res.send('PLEASEE WORKKK');
});


app.post('/api/influencers', async (req, res) => {
    try {
    const newInfluencer = new InfluencerModelWithId(req.body);
    const savedInfluencer = await newInfluencer.save();
    res.status(201).json(savedInfluencer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/influencercards', async (req, res) => {
  try {
    const influencers = await InfluencerModelWithId.find();
    console.log(influencers);
    res.status(200).json(influencers); 
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message)
  }
});


app.get('/api/get-influencer-deets', async (req, res) => {
  const {idParam} = req.query;
  try {
    const influencers = await InfluencerModelWithId.findOne({Id : idParam}); 
    res.status(200).json(influencers); 
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message)
  }
});


app.listen(3000, () => console.log('Server running on port 3000'));

