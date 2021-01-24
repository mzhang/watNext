const { Double } = require("mongodb");
const mongoose = require("mongoose");

const task = new mongoose.Schema({
    name: String,
    type: String,
    endTime: Number,
    users: ObjectId
  });

module.exports = mongoose.model('task', task)