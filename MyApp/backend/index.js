console.log("bruh does this even work");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

console.log("till when does this go on")

mongoose.connect("mongodb+srv://likhitrajy:bruh123@cluster0.i1lzic0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("mongodb connected brah"))
 .catch(() => console.log("error"))

const influencerSchema = new mongoose.Schema({
  Name : String,
  Description: String, 
  Imageurl: String ,
  Ratings: String,
  NoOfRatings: String,
  ytSubs: String,
  instaFollowers: String,
  XFollowers: String,
});

const InfluencerModel = mongoose.model('Influencerzzz', influencerSchema);


app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/bruh', (req, res) => {
  res.send('PLEASEE WORKKK');
});


app.post('/api/influencers', async (req, res) => {
    console.log("negrooo");
    try {
    const newInfluencer = new InfluencerModel(req.body);
    const savedInfluencer = await newInfluencer.save();
    res.status(201).json(savedInfluencer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/api/influencercards', async (req, res) => {
  console.log("get cards is being triggered")
  try {
    const influencers = await InfluencerModel.find(); 
    res.status(200).json(influencers); 
  } catch (err) {
    res.status(500).json({ error: err.message });
    console.log(err.message)
  }
});


app.listen(3000, () => console.log('Server running on port 3000'));

