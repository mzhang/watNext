const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({
    user: String,
    task: String,
    comment: String
});

module.exports = mongoose.model('comment', CommentSchema)