const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    showId: { type: mongoose.Types.ObjectId, ref: "shows", require: true },
    UserId: { type: mongoose.Types.ObjectId, ref: "users", require: true },
    date: { type: Date, require: true },
    comment: { type: String, require: true },
});

const Comment = mongoose.model("comment", schema);

module.exports = Comment;
