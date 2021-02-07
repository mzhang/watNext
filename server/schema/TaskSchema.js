const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
    name: String,
    type: String,
    completedUsers: [String],
    endTime: Number
});

module.exports = mongoose.model('task', TaskSchema)
