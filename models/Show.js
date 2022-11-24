const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    hotelId: { type: mongoose.Types.ObjectId, ref: "hotels" },
    name: { type: String, require: true },
    description: { type: String, require: true },
    photo: { type: String, require: true },
    price: { type: Number, require: true },
    date: { type: Date, require: true },
    userId: { type: mongoose.Types.ObjectId, ref: "users" },
});

const Show = mongoose.model("shows", schema);
module.exports = Show;
