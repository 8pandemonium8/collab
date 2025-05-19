console.log("bruh does this even work");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

console.log("till when does this go on")

mongoose.connect("mongodb+srv://bruh:bruh123@cluster0.i1lzic0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("mongodb connected brah"))
 .catch(() => console.log("error"))

app.get('/', (req, res) => {
  res.send('Hello from backend!');
});

app.get('/bruh', (req, res) => {
  res.send('PLEASEE WORKKK');
});

app.listen(3000, () => console.log('Server running on port 3000'));