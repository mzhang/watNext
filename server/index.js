const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const routes = require("./routes/routes");
const cookieParser = require('cookie-parser');

const app = express();
app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use('/api', routes);

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => console.log("we're in."));


app.listen(4000, () => console.log(`We're live!`));

// app.get('/1b', async (req, res) => {
//     const collection = client.db("1b").collection("tasks");
//     const data = await collection.find({}, { projection: { _id: 0  } }).toArray()
//     res.send(data)
//     client.close()
// }) 