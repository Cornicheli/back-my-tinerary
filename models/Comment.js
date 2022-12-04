const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{type: String},
    photo: { type: String},
    showId:{type: mongoose.Types.ObjectId, ref:"shows" ,required: true},
    userId:{type: mongoose.Types.ObjectId, ref:"users" ,required: true},
    date: {type: Date, required: true},
    comment:[{type: String, required: true}],
})
const Comment = mongoose.model('comment',schema);

module.exports = Comment