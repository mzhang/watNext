const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');

const loginRoutes = require("./routes/login");
const taskActions = require("./routes/taskActions");

var corsOptions = {
    origin: 'http://localhost:3000',
    credentials : true
   }

const app = express();
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/user', loginRoutes);
app.use('/task', taskActions);


mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.once('open', () => console.log("we're in."));

app.listen(4000, () => console.log(`We're live!`));